'use strict';

var ECS_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardFireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomIndex = function (length) {
  var randomIndex = Math.floor(Math.random() * (length - 1));
  return randomIndex;
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');

var setupFireball = document.querySelector('.setup-fireball-wrap');
// var setupFireballColor = setupFireball.querySelector('.wizard-eyes');


setupWizardCoat.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-coat').setAttribute('style', 'fill:' + wizardCoatColor[getRandomIndex(wizardCoatColor.length)]);
});

setupWizardEyes.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-eyes').setAttribute('style', 'fill:' + wizardEyesColor[getRandomIndex(wizardEyesColor.length)]);
});

setupFireball.addEventListener('click', function () {
  setupFireball.setAttribute('value', '#ee4830');
});


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ECS_KEYCODE) {
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
