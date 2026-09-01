(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.querySelector('[data-theme-toggle]');
  var languageToggle = document.querySelector('[data-language-toggle]');
  var menuToggle = document.querySelector('[data-home-menu-toggle]');
  var menu = document.querySelector('[data-home-nav-menu]');
  var navigation = document.querySelector('[data-home-navigation]');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-home-nav-link]'));
  var chineseTemplate = document.querySelector('[data-language-template="zh"]');
  var englishContent = document.querySelector('.academic-home').cloneNode(true);
  var storageKey = 'lxmliu-theme';
  var languageStorageKey = 'lxmliu-language';
  var sectionLinks = [];
  var ticking = false;

  function isChinese() {
    return root.dataset.language === 'zh';
  }

  function labels() {
    return isChinese() ? {
      themeLight: '切换到浅色模式',
      themeDark: '切换到深色模式',
      menuOpen: '打开导航',
      menuClose: '关闭导航',
      navigation: '主导航',
      language: 'Switch to English',
      languageShort: 'EN',
      newsAll: '查看全部动态',
      newsLess: '收起动态',
      contactAll: '查看全部邮箱',
      contactLess: '收起其他邮箱'
    } : {
      themeLight: 'Switch to light theme',
      themeDark: 'Switch to dark theme',
      menuOpen: 'Open navigation',
      menuClose: 'Close navigation',
      navigation: 'Primary navigation',
      language: '切换到中文',
      languageShort: '中',
      newsAll: 'Show all news',
      newsLess: 'Show less',
      contactAll: 'Show all email addresses',
      contactLess: 'Show fewer addresses'
    };
  }

  function updateThemeToggle(theme) {
    if (!themeToggle) {
      return;
    }

    var isDark = theme === 'dark';
    var label = isDark ? labels().themeLight : labels().themeDark;
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('title', label);
    themeToggle.querySelector('.visually-hidden').textContent = label;
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    updateThemeToggle(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  function setMenu(open) {
    if (!menuToggle || !menu) {
      return;
    }

    var label = open ? labels().menuClose : labels().menuOpen;
    menu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('title', label);
    menuToggle.querySelector('.visually-hidden').textContent = label;
    menuToggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function () {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) {
        setMenu(false);
      }
    });
  }

  function updateActiveNavigation() {
    if (!sectionLinks.length) {
      ticking = false;
      return;
    }

    var offset = 150;
    var current = sectionLinks[0];

    sectionLinks.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= offset) {
        current = item;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sectionLinks[sectionLinks.length - 1];
    }

    sectionLinks.forEach(function (item) {
      var active = item === current;
      item.link.classList.toggle('is-active', active);
      if (active) {
        item.link.setAttribute('aria-current', 'location');
      } else {
        item.link.removeAttribute('aria-current');
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveNavigation);
      ticking = true;
    }
  }, { passive: true });

  function initializeContent() {
    sectionLinks = navLinks.map(function (link) {
      var id = new URL(link.href, window.location.href).hash.slice(1);
      return { link: link, section: document.getElementById(id), id: id };
    }).filter(function (item) {
      return item.section;
    });

    var newsList = document.querySelector('[data-news-list]');
    var newsToggle = document.querySelector('[data-news-toggle]');
    if (newsList && newsToggle && newsList.children.length > 6) {
      newsList.classList.add('is-collapsible');
      newsToggle.classList.add('is-ready');
      newsToggle.querySelector('span').textContent = labels().newsAll;
      newsToggle.addEventListener('click', function () {
        var expanded = !newsList.classList.contains('is-expanded');
        newsList.classList.toggle('is-expanded', expanded);
        newsToggle.setAttribute('aria-expanded', String(expanded));
        newsToggle.querySelector('span').textContent = expanded ? labels().newsLess : labels().newsAll;
        newsToggle.querySelector('i').className = expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
      });
    }

    var contactList = document.querySelector('[data-contact-list]');
    var contactToggle = document.querySelector('[data-contact-toggle]');
    if (contactList && contactToggle && contactList.querySelector('.contact-secondary')) {
      contactList.classList.add('is-collapsible');
      contactToggle.classList.add('is-ready');
      contactToggle.querySelector('span').textContent = labels().contactAll;
      contactToggle.addEventListener('click', function () {
        var expanded = !contactList.classList.contains('is-expanded');
        contactList.classList.toggle('is-expanded', expanded);
        contactToggle.setAttribute('aria-expanded', String(expanded));
        contactToggle.querySelector('span').textContent = expanded ? labels().contactLess : labels().contactAll;
        contactToggle.querySelector('i').className = expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
      });
    }

    updateActiveNavigation();
  }

  function updateLanguageControls() {
    var language = isChinese() ? 'zh' : 'en';
    navLinks.forEach(function (link) {
      link.textContent = link.getAttribute('data-label-' + language);
    });

    if (navigation) {
      navigation.setAttribute('aria-label', labels().navigation);
    }
    if (languageToggle) {
      languageToggle.setAttribute('title', labels().language);
      languageToggle.setAttribute('aria-label', labels().language);
      languageToggle.querySelector('span').textContent = labels().languageShort;
    }

    setMenu(false);
    updateThemeToggle(root.dataset.theme || 'light');
  }

  function setLanguage(language, persist) {
    var currentContent = document.querySelector('.academic-home');
    var targetContent;
    var currentSection = sectionLinks.filter(function (item) {
      return item.link.classList.contains('is-active');
    })[0];

    if (language === 'zh' && chineseTemplate) {
      targetContent = chineseTemplate.content.firstElementChild.cloneNode(true);
    } else {
      language = 'en';
      targetContent = englishContent.cloneNode(true);
    }

    root.dataset.language = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    currentContent.replaceWith(targetContent);
    updateLanguageControls();
    initializeContent();

    if (persist) {
      try {
        localStorage.setItem(languageStorageKey, language);
      } catch (error) {
        // Language switching still works when browser storage is unavailable.
      }
    }

    if (currentSection && currentSection.id !== 'home') {
      var replacementSection = document.getElementById(currentSection.id);
      if (replacementSection) {
        replacementSection.scrollIntoView();
      }
    }
  }

  if (languageToggle && chineseTemplate) {
    languageToggle.addEventListener('click', function () {
      setLanguage(isChinese() ? 'en' : 'zh', true);
    });
  }

  if (isChinese()) {
    setLanguage('zh', false);
  } else {
    updateLanguageControls();
    initializeContent();
  }
}());
