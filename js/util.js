'use strict';

(function () {
  var ECS_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode !== ECS_KEYCODE) {
        return;
      }

      if (document.activeElement.closest('.setup-user-name')) {
        document.querySelector('.setup-user-name').blur();
      } else {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
