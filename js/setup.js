'use strict';

var ECS_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var START_SETUP_POSITION_TOP = '80px';
var START_SETUP_POSITION_LEFT = '50%';

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var colorIndex = 1;

var getWizardColor = function (arrColor) {
  if (colorIndex >= arrColor.length) {
    colorIndex = 0;
  }
  var index = colorIndex;
  var color = arrColor[index];
  colorIndex++;
  return color;
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupPlayer = document.querySelector('.setup-player');
var setupFireball = document.querySelector('.setup-fireball-wrap');

var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');

setupWizardCoat.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-coat').setAttribute('style', 'fill:' + getWizardColor(wizardCoatColors));
});

setupWizardEyes.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-eyes').setAttribute('style', 'fill:' + getWizardColor(wizardEyesColors));
});

setupFireball.addEventListener('click', function () {
  setupFireball.setAttribute('style', 'background:' + getWizardColor(wizardFireballColors));
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode !== ECS_KEYCODE) {
    return;
  }

  if (document.activeElement.closest('.setup-user-name')) {
    document.querySelector('.setup-user-name').blur();
  } else {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setup.style.top = START_SETUP_POSITION_TOP;
  setup.style.left = START_SETUP_POSITION_LEFT;
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

(function () {

  var dialogHandler = setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (e) {
          e.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
