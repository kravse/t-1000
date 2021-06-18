const T1000Main = function () {
  let mostRecentTargetText = '';
  function init() {
    addButton();
  }

  function setListeners() {
    let t1000Button = document.getElementById('t-1000-button');
    document.addEventListener('mouseenter', (e) => {
      const el = e.target;
      if (el.nodeName !== 'ARTICLE') return;
      mostRecentTargetText = el.textContent;
      const viewport = el.getBoundingClientRect()
      const top = viewport.bottom;
      const right = viewport.right;
      t1000Button.style.opacity = '1';
      t1000Button.style.top = `${top - t1000Button.offsetHeight}px`;
      t1000Button.style.left = `${right - t1000Button.offsetWidth}px`;
    });

    document.addEventListener('scroll', (e) => {
      t1000Button.style.opacity = 0;
    });
  }
  function addButton() {
    const btn = document.createElement('button');
    btn.innerHTML = "T-1000";
    btn.setAttribute('id', 't-1000-button');
    btn.style.position = 'fixed';
    btn.style['z-index'] = '10000';
    btn.style.opacity = '0';
    btn.addEventListener('click', (e) => {
      e.target.style.opacity = 0;
      chrome.storage.sync.set({ 'PAGE_TEXT': mostRecentTargetText });
    });
    document.body.appendChild(btn);
    setListeners();
  }

  return {
    init: init
  }
}
document.addEventListener("DOMContentLoaded", T1000Main().init());
