/**
 * 动态加载初始资源
 */
(function (document) {
  // 资源列表
  var resList = {
    css: [ /* './assets/css/font-awesome.min.css', */ './assets/css/app.min.css'],
    js: ['./assets/js/manifest.js', './assets/js/vendor.js', './assets/js/app.js']
  };

  var htmlDom = document.querySelector('html'),
    headDom = document.querySelector('head'),
    bodyDom = document.querySelector('body');

  function createStyle(index) {
    var style = document.createElement('link');
    style.href = resList.css[index] + '?_vc_=' + Date.now();
    style.setAttribute('rel', 'stylesheet');
    return style;
  }

  function createScript(index) {
    var script = document.createElement('script');
    script.src = resList.js[index] + '?_vc_=' + Date.now();
    return script;
  }

  // 样式
  (function () {
    var i = 0,
      _style = null;
    htmlDom.style.opacity = 0;

    var loadStyles = function () {
      if (i >= resList.css.length) {
        htmlDom.style.opacity = 1;
        _style = null;
        return;
      }
      _style = createStyle(i);
      _style.onload = function () {
        i++;
        loadStyles();
      };
      headDom.appendChild(_style);
    };
    loadStyles();
  })();

  // 脚本
  var isLoad = false;
  document.onreadystatechange = function () {
    if (!isLoad && (document.readyState === 'interactive' || document.readyState === 'complete')) {
      isLoad = true;
      var i = 0,
        _script = null,
        createScripts = function () {
          if (i >= resList.js.length) {
            document.onreadystatechange = null;
            return;
          }
          _script = createScript(i);
          _script.onload = function () {
            i++;
            createScripts();
          };
          bodyDom.appendChild(_script);
        };
      createScripts();
    }
  };
}.call(window, document));
