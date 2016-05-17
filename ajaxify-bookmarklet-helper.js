function insertScriptTag(url) {
  var scriptTag =  document.createElement('script');
  scriptTag.setAttribute('src', url);
  document.body.appendChild(scriptTag);

  console.log("Inserted: " + url);
}

(function(window, undefined) {
  "use strict";

  // jQuery
  if (!window.jQuery) {
    insertScriptTag('//ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js');
  }


  // History & ScrollTo (Wait for jQuery)
  var interval = setInterval(function() {
    if (window.jQuery) {
      clearInterval(interval);

      // History.js & ScrollTo.js
      if (!window.History || !window.History.initHtml4) {
        insertScriptTag('//browserstate.github.io/history.js/scripts/bundled/html4+html5/jquery.history.js');
      }

      if (!jQuery.ScrollTo) {
        insertScriptTag('//balupton.github.io/jquery-scrollto/lib/jquery-scrollto.js');
      }

      interval = setInterval(function() {
        if (window.History && window.History.initHtml4) {
          clearInterval(interval);

          // Ajaxify-html5.js
          insertScriptTag('//rawgithub.com/browserstate/ajaxify/master/ajaxify-html5.js');

          interval = setInterval(function() {
            if (jQuery.fn.ajaxify) {
              clearInterval(interval);
              alert('History.js It! Is ready for action!');
            }
          }, 500);
        } else if (console && console.log) {
          console.log("Loading history.js and scrollto.js");
        }
      }, 500);
    } else if (console && console.log) {
      console.log("Loading jQuery");
    }
  }, 500);
}(window));
