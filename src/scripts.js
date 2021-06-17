document.addEventListener("DOMContentLoaded", async function () {
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
      document.getElementById('container').classList.add('key');
    } else {
      document.getElementById('container').classList.remove('key');
    }
  }
  const init = () => {
    const form = document.getElementById('api-form');
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
    document.getElementById('edit-key').addEventListener('click', (e) => {
      toggleKey(false);
    })
  }



  // chrome.storage.local.get(['disabled'], function (result) {
  //   console.log('Value currently is ' + result.key);
  // });
  // let storage = await chrome.storage.local.get(['disabled']);
  // let disabled = storage.disabled || false;
  // // chrome.storage.sync.set({ key: value }, function () {
  //   console.log('Value is set to ' + value);
  // });

  // chrome.storage.sync.get(['disabled']), function (result) {
  //   console.log('Value currently is ' + result.key);
  // });
  // const setClass = (disabled) => {
  //   if (disabled) {
  //     document.getElementById('toggle').classList.add('disabled')
  //   } else {
  //     document.getElementById('toggle').classList.remove('disabled')
  //   }
  // }
  // const setState = (disabled) => {
  //   setClass(disabled)
  //   chrome.tabs.query({}, tabs => {
  //     tabs.forEach(tab => {
  //       chrome.tabs.sendMessage(tab.id, { disable: disabled });
  //     });
  //   });
  // }
  // setState(disabled);
  // document.getElementById('api-key').addEventListener("click", (e) => {
  //   console.log()
  //   // e.preventDefault();
  //   // disabled = !disabled
  //   // chrome.storage.local.set({ ['disabled']: disabled })
  //   // setState(disabled)
  // });
});

