import GameDisplay from './game-display.js';

$('#play-form').submit(() => {
  event.preventDefault();

  $('#landing-main').hide();
  $('#card-display-main').show();

  let setsOfCards = parseInt($('#set-num-select').val());
  let secondsToDisplay = parseInt($('#seconds-num-select').val());
  let $cardsDisplay = '#card-display-main';

  new GameDisplay(setsOfCards, secondsToDisplay, '#card-display-main');
});
