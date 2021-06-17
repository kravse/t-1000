// const underscore = require('underscore')
document.addEventListener("DOMContentLoaded", async function () {
  // chrome.storage.sync.set({'disabled': true}, function () {
  //   chrome.storage.sync.get('disabled', function (val) {
  //     console.log(val.disabled);
  //   });
  // });


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
  // document.getElementById('toggle').addEventListener("click", (e) => {
  //   e.preventDefault();
  //   disabled = !disabled
  //   chrome.storage.local.set({ ['disabled']: disabled })
  //   setState(disabled)
  // });
});

