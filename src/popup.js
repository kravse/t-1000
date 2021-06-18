const RandomForestClassifier = require("./random_forest_classifier.js")

const COLOR = require('color');
const AXIOS = require('axios');
const MATHJS = require('mathjs');

document.addEventListener("DOMContentLoaded", async function () {
  const api_url = 'https://api.cohere.ai/baseline-shark/likelihood'
  const container = document.getElementById('container');
  const textNode = document.getElementById('result-text');
  const result = document.getElementById('result-slot');
  const form = document.getElementById('api-form');
  const contentForm = document.getElementById('content-form');
  const editKey = document.getElementById('edit-key');
  let key;

  chrome.storage.sync.get('key', function (val) {
    if (val.key) {
      key = val.key;
      toggleKey(true);
    }
    init();
  });

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
    console.log(probability_of_bot)
  }
  const doListeners = () => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      form.classList.remove('error');
      const keyValue = document.getElementById('api-key').value;
      if (!keyValue) {
        form.classList.add('error');
      } else {
        await chrome.storage.sync.set({ 'key': keyValue });
        toggleKey(true);
      }
    });

    editKey.addEventListener('click', (e) => {
      toggleKey(false);
    })
    document.getElementById('try-again').addEventListener('click', (e) => {
      container.classList.remove('result-available')
      document.getElementById('text-area').value = '';
    })
    contentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      container.classList.remove('result-available')
      contentForm.classList.remove('error')
      let text = document.getElementById('text-area').value
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
      })
    })
  }

  const init = () => {
    doListeners();
  }
});

