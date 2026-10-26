/* Přepínání jazyka na právních stránkách. Používá stejný klíč jako hlavní web. */
(function () {
  var root = document.documentElement;
  function set(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang === 'cz' ? 'cs' : 'en';
    var cz = document.getElementById('btn-cz'), en = document.getElementById('btn-en');
    if (cz) cz.setAttribute('aria-pressed', lang === 'cz');
    if (en) en.setAttribute('aria-pressed', lang !== 'cz');
    try { localStorage.setItem('preferred_lang', lang); } catch (e) {}
  }
  var l = null;
  try { l = localStorage.getItem('preferred_lang'); } catch (e) {}
  if (l !== 'cz' && l !== 'en') l = /^cs/i.test(navigator.language || '') ? 'cz' : 'en';
  set(l);
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-set-lang]');
    if (b) set(b.getAttribute('data-set-lang'));
  });
})();
