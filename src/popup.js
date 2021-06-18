const RandomForestClassifier = require("./random_forest_classifier.js")

const COLOR = require('color');
const AXIOS = require('axios');
const MATHJS = require('mathjs');

document.addEventListener("DOMContentLoaded", async function () {
  const api_url = 'https://api.cohere.ai/baseline-orca/likelihood'
  const container = document.getElementById('container');
  const textNode = document.getElementById('result-text');
  const result = document.getElementById('result-slot');
  const form = document.getElementById('api-form');
  const contentForm = document.getElementById('content-form');
  const editKey = document.getElementById('edit-key');
  const submitButton = document.getElementById('submit-button');
  const capturedTextButton = document.getElementById('captured-text-button');
  const textArea = document.getElementById('text-area');
  let capturedText;
  let key;

  chrome.storage.sync.get(['key', 'PAGE_TEXT'], (val) =>{
    if (val.key) {
      key = val.key;
      toggleKey(true);
    }
    if (val.PAGE_TEXT) {
      setAvailableText(val.PAGE_TEXT);
    }
    init();
  });

  const setAvailableText = (text) => {
    capturedText = text;
    let textnode = document.createTextNode(text);
    capturedTextButton.classList.add('visible');
    capturedTextButton.appendChild(textnode);
  }

  const toggleKey = (show) => {
    if (show) {
      container.classList.add('key-available');
    } else {
      container.classList.remove('key-available');
    }
  }

  const handleResponse = (likelihoods) => {
    result.innerHTML = '';
    var likelihood_list = new Array()
    for (val of likelihoods.token_likelihoods) {
      let clone = textNode.cloneNode(true);
      clone.innerHTML = val.token;
      clone.style.background = COLOR.rgb(214, 88, 214, (1 / -val.likelihood));
      result.appendChild(clone);
      likelihood_list.push(val.likelihood)
    }
    likelihood_list.shift()

    var features = [likelihoods.likelihood,
    MATHJS.mean(likelihood_list),
    MATHJS.variance(likelihood_list),
    MATHJS.max(likelihood_list),
    MATHJS.min(likelihood_list),
    MATHJS.median(likelihood_list)]
    var prediction = RandomForestClassifier.default.predict(features);
    var probability_of_bot = prediction[0] / 100
    const resultSentence = document.createTextNode(`This text is ${Math.floor(100 * probability_of_bot)}% similar to bot written text.`);
    const resSen = document.getElementById('result-sentence')
    resSen.innerHTML = '';
    resSen.appendChild(resultSentence);
  }

  const doListeners = () => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      form.classList.remove('error');
      const keyValue = document.getElementById('api-key').value;
      if (!keyValue) {
        form.classList.add('error');
      } else {
        key = keyValue;
        await chrome.storage.sync.set({ 'key': keyValue });
        toggleKey(true);
      }
    });

    editKey.addEventListener('click', (e) => {
      toggleKey(false);
    })
    document.getElementById('try-again').addEventListener('click', (e) => {
      container.classList.remove('result-available')
      textArea.value = '';
    })
    contentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let text = document.getElementById('text-area').value;
      if (!text) {
        grabCapturedText();
        text = document.getElementById('text-area').value;
        if (!text) return;
      }
      container.classList.remove('result-available');
      contentForm.classList.remove('error');
      submitButton.classList.add('spin');
      AXIOS({
        method: 'post',
        url: api_url,
        data: {
          text: text,
        },
        headers: {
          'Authorization': `BEARER ${key}`,
          'Content-Type': 'application/json'
        }
      }).then(result => {
        container.classList.add('result-available')
        handleResponse(result.data);
      }).catch(e => {
        contentForm.classList.add('error')
      }).finally(()=> {
        submitButton.classList.remove('spin')
      })
    })

    capturedTextButton.addEventListener('click', (e) => {
      grabCapturedText();
      submitButton.click();
    })
  }

  const grabCapturedText = () => {
    capturedTextButton.classList.remove('visible');
    textArea.value = capturedText;
    capturedText = '';
    console.log(textArea.value)
    chrome.storage.sync.set({ 'PAGE_TEXT': '' });
  }


  const init = () => {
    doListeners();
  }

});
