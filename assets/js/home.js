(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  var storageKey = 'lxmliu-theme';

  if (!toggle) {
    return;
  }

  function updateToggle(theme) {
    var isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.querySelector('.visually-hidden').textContent = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    updateToggle(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  updateToggle(root.dataset.theme || 'light');
  toggle.addEventListener('click', function () {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}());
