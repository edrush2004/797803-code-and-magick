'use strict';

(function () {

  var quantityPopapWizards = 4;

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  var otherMagicks = function (wizards) {
    var fragment = document.createDocumentFragment();

    var getRandomIndex = function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };

    for (var i = 0; i < quantityPopapWizards; i++) {
      fragment.appendChild(renderWizard(wizards[getRandomIndex(0, wizards.length - 1)]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(otherMagicks, window.errorMessage.rendErrorMessage);

})();
