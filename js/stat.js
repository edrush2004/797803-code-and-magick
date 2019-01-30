'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var gistHeight = 150;
var gistWidth = 40;
var CLOUD_GAP_LEFT = 40;
var COLUMN_GAP_UP = 235;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + 35);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 35 + FONT_GAP);
  // ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(CLOUD_X + CLOUD_GAP_LEFT + (gistWidth + TEXT_WIDTH) * i, CLOUD_Y + COLUMN_GAP_UP - GAP, gistWidth, -(gistHeight * times[i] / maxTime));

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + CLOUD_GAP_LEFT + (gistWidth + TEXT_WIDTH) * i, CLOUD_Y + COLUMN_GAP_UP + GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_GAP_LEFT + (gistWidth + TEXT_WIDTH) * i, CLOUD_Y + COLUMN_GAP_UP
            - FONT_GAP - (gistHeight * times[i] / maxTime));
  }
};

