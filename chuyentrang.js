(function () {
  function isSamePageHtmlLink(link) {
    if (!link) return false;
    if (link.target && link.target !== '' && link.target !== '_self') return false;
    const href = link.getAttribute('href');
    if (!href) return false;
    if (href.charAt(0) === '#') return false;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('javascript:') === 0) return false;
    if (/^([a-z]+:)?\/\//i.test(href)) return false;
    if (href.toLowerCase().indexOf('.html') === -1) return false;
    return true;
  }

  function handleClick(e) {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href]');
    if (!isSamePageHtmlLink(link)) return;

    e.preventDefault();
    const href = link.getAttribute('href');
    document.body.classList.add('page-leave');
    setTimeout(function () {
      window.location.href = href;
    }, 250);
  }

  function init() {
    document.addEventListener('click', handleClick);
  }

  function restorePage() {
    document.body.classList.remove('page-leave');
  }

  window.addEventListener('pageshow', restorePage);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
