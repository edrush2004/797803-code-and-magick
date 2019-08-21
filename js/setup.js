'use strict'

var userDialog = document.querySelector('.setup');
//userDialog.classList.remove('hidden');
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
  
  return  arr[Math.floor(Math.random() * (arr.length - 1) - 0)  + 0 + 1 ];
              
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

//// Урок 4 
var fireballWrap = [
'#ee4830',
'#30a8ee',
'#5ce6c0',
'#e848d5',
'#e6e848' ];


  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardName = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var onPopupEscPress = function(evt){
    if(evt.keyCode === 27 && evt.target !== wizardName){
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown',onPopupEscPress);
    
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  //stopPropagation()  
  setupOpen.addEventListener('click', function(){ 
    openPopup();  
  });

  setupClose.addEventListener('click', function(){
    closePopup();
  });

  setupOpen.addEventListener('keydown', function(evt){
    if(evt.keyCode === 13){
      openPopup();
    }
  })
  
  setupClose.addEventListener('keydown', function(evt){
    if(evt.keyCode === 13){
      closePopup();
    }
  })

//Изменение цвета мантии
var onCoatClick = function (){
  wizardCoat.style.fill = getRandomItem(Wizard.coatColor);
}
var onEyesClick = function (){
  wizardEyes.style.fill = getRandomItem(Wizard.coatColor);
}
var onFireballClick = function (){
  wizardFireballWrap.style.background = getRandomItem(fireballWrap);
}
wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireballWrap.addEventListener('click', onFireballClick);
 



  