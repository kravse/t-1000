const T1000Main = function () {
  function init() {
    console.log('whahahta');
    chrome.storage.sync.set({ 'PAGE_TEXT': 'helllllllo' });
    addButton();
    setListeners();
  }
  function setListeners() {
    let t1000Button = document.getElementById('t-1000-button')
    document.addEventListener('mouseover', (e) => {
      const el = e.target;
      if (el.nodeName !== 'ARTICLE') return;
      const viewport = el.getBoundingClientRect()
      const top = viewport.bottom;
      const right = viewport.right;
      t1000Button.style.opacity = '1';
      t1000Button.style.top = `${top - t1000Button.offsetHeight}px`;
      t1000Button.style.left = `${right - t1000Button.offsetWidth}px`;
    })

    document.addEventListener('scroll', function (e) {
      t1000Button.style.opacity = 0;
    })
  }
  function addButton() {
    const t1000Button = document.createElement('button');
    t1000Button.innerHTML = "CLICK ME";                   // Insert text
    t1000Button.setAttribute('id', 't-1000-button');
    t1000Button.style.position = 'fixed';
    t1000Button.style['z-index'] = '10000';
    t1000Button.style.opacity = '0';
    document.body.appendChild(t1000Button);
  }

  return {
    init: init
  }
}
document.addEventListener("DOMContentLoaded", T1000Main().init());
