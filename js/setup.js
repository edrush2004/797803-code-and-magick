'use strict'

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
//userDialog.querySelector('.setup-similar').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


var Wizard = {
  quantity: 4,
  name: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон' 
  ],
  surname: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  coatColor: [
    'rgb(101,137,163)',
    'rgb(241,43,107)',
    'rgb(146,100,161)',
    'rgb(56,159,117)',
    'rgb(215,210,55)',
    'rgb(0,0,0)'
  ],
  eyesColor: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};
var similarListElement = document.querySelector('.setup-similar-list');

var similarWizaedTemplate = document.querySelector('#similar-wizard-template')
.content.querySelector('.setup-similar-item');

var getRandomItem = function (arr) {
  
  return  arr[Math.floor(Math.random() * arr.length)];
  
};

var getWizard = function () {
  return {
    name: getRandomItem(Wizard.name) + ' ' + getRandomItem(Wizard.surname),
    coatColor: getRandomItem(Wizard.coatColor),
    eyesColor: getRandomItem(Wizard.eyesColor)
  }
};

var wiz = [];
for (var i = 0; i <  Wizard.quantity; i++){
  wiz.push(getWizard());
};

var fragment = document.createDocumentFragment();

for (var i = 0; i <  wiz.length; i++){
    
    var wizardElement = similarWizaedTemplate.cloneNode(true);
    
    wizardElement.querySelector('.setup-similar-label').textContent =
      wiz[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = 
      wiz[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = 
      wiz[i].eyesColor;

  fragment.appendChild(wizardElement);
    } 
 
  similarListElement.appendChild(fragment);
   



  