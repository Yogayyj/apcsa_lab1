'use strict';
(() => {
  const grid = document.querySelector('.lab-grid');
  const panel = document.getElementById('questionPanel');
  const handle = document.getElementById('sidebarResize');
  const key = 'javaLabs_questionWidth';
  let desiredWidth = null;
  let drag = null;
  try {
    const saved = Number(localStorage.getItem(key));
    if (Number.isFinite(saved) && saved >= 220) desiredWidth = saved;
  } catch (_) { /* Resizing also works when browser storage is unavailable. */ }
  function limits() {
    const width = grid.getBoundingClientRect().width || window.innerWidth;
    return {min:220, max:Math.max(220, Math.min(560, width - (window.innerWidth > 1080 ? 750 : 360)))};
  }
  function apply() {
    if (window.innerWidth <= 760) return;
    const {min,max} = limits();
    const width = Math.round(Math.min(max, Math.max(min, desiredWidth ?? (window.innerWidth > 1080 ? 280 : 240))));
    grid.style.setProperty('--question-width', `${width}px`);
    handle.setAttribute('aria-valuemin', min);
    handle.setAttribute('aria-valuemax', max);
    handle.setAttribute('aria-valuenow', width);
    handle.setAttribute('aria-valuetext', `${width} pixels`);
  }
  function persist() {
    try {
      if (desiredWidth === null) localStorage.removeItem(key);
      else localStorage.setItem(key, desiredWidth);
    } catch (_) {}
  }
  function setWidth(width) {
    const {min,max} = limits();
    desiredWidth = Math.round(Math.min(max, Math.max(min, width)));
    apply();
  }
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0 || window.innerWidth <= 760) return;
    event.preventDefault();
    drag = {id:event.pointerId, x:event.clientX, width:panel.getBoundingClientRect().width};
    handle.setPointerCapture(event.pointerId);
    document.body.classList.add('resizing-sidebar');
  });
  handle.addEventListener('pointermove', event => {
    if (drag?.id === event.pointerId) setWidth(drag.width + event.clientX - drag.x);
  });
  function finish(event) {
    if (!drag || drag.id !== event.pointerId) return;
    drag = null;
    document.body.classList.remove('resizing-sidebar');
    persist();
  }
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => handle.addEventListener(type, finish));
  handle.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const {min,max} = limits();
    setWidth(event.key === 'Home' ? min : event.key === 'End' ? max : panel.getBoundingClientRect().width + (event.key === 'ArrowRight' ? 10 : -10));
    persist();
  });
  handle.addEventListener('dblclick', () => {desiredWidth = null; apply(); persist();});
  window.addEventListener('resize', apply);
  // The lab starts hidden; measure its available space when it opens.
  new MutationObserver(apply).observe(document.getElementById('labView'), {attributes:true, attributeFilter:['class']});
  apply();
})();
