import {apiKey} from './constants.js';
import Game from './game.js';

class GameDisplay {
  constructor(setsOfCards, secondsToDisplay, $cardsDisplay) {
    this.setsOfCards = setsOfCards;
    this.secondsToDisplay = secondsToDisplay;
    this.$cardsDisplay = $cardsDisplay;
    this.clickDisabled = true;
    this.cardsTurned = 0;
    this.game = new Game();

    this.setUpGame();
  }

  retrieveGifUrl(){
    return $.ajax({
      url: 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey,
      type: 'GET'
    });
  }

  fillArray(){
    this.showLoadingScreen();
    if (this.game.arrayOfGifUrls.length < this.setsOfCards) {
      this.retrieveGifUrl()
      .then((results)=> {
        this.game.arrayOfGifUrls.push(results.data.images.downsized.url);
        this.fillArray();
      })
    } else {
      this.game.createCardsInfoObject();
      this.fillDOM();
    }
  }

  fillDOM() {
    for (let i = 0; i < Object.keys(this.game.cardsInfoObject).length; i++) {
      this.createCardElementSet(i);
    }

    this.setStylingOnCards();
    this.runPostLoadingDisplay();
  }

  setStylingOnCards() {
    /*I want the cards to always display in 2 rows.*/
    /*Therefore, width for each card will be 100/(this.setsOfCards)*/
    $('.card-display').width(`${100/(this.setsOfCards)}%`);
    $('.card-display').height(100);

    // $('figure').addClass('card-figure');
    // /*I want the cards to always display in 2 rows.*/
    // /*Therefore, width for each card will be 100/(this.setsOfCards)*/
    // $('.card-figure').width(`${100/(this.setsOfCards)}%`);
    // $('.card-figure').height(100);

  }

  setUpGame(){
    this.fillArray();
  }

  showLoadingScreen() {
    $('#loading-screen').show();
  }

  runPostLoadingDisplay() {
    let boundShowAllCardsBeforeStart = this.showAllCardsBeforeStart.bind(this);

    setTimeout(function(){
      $('#loading-screen').hide();
      boundShowAllCardsBeforeStart();
    }, 3000); //allow the dom 3 seconds to render the images
  }

  showAllCardsBeforeStart(){
    $('.image-cover').each(function() {
      $(this).hide();
    });

    let currentCountDown = this.secondsToDisplay;
    let self = this;
    $('#count-down').html(this.secondsToDisplay);
    currentCountDown--;

    let countDownTimer = setInterval(function() {
      if (currentCountDown > 0) {
        $('#count-down').html(currentCountDown);
        currentCountDown--;
      } else {
        clearInterval(countDownTimer);
        $('#count-down').html('');

        $('.image-cover').each(function() {
          $(this).show();
        });

        self.clickDisabled = false;
      }
    }, 1000);
  }

  setEventListenersForCardDisplay($imageCover, $image) {
    //set event listeners MOVE TO GAME CLASS

    let game = this.game;
    let hideCardsAfterAttempt = this.hideCardsAfterAttempt.bind(this);
    let updateScoresSection = this.updateScoresSection.bind(this);
    let self = this;

    $($imageCover).click(function(){
      if (self.cardsTurned === 2 || self.clickDisabled === true) {
        return;
      } else {
        self.cardsTurned++;
      }

      $(this).hide();
      let idOfCover = $(this)[0].id;
      let cardNumber = idOfCover.split("cover-")[1];
      game.handleCoverClick(parseInt(cardNumber));

      if (game.turnedCardNumber === null) {

        setTimeout(hideCardsAfterAttempt, 2000);
        updateScoresSection();
      }
    })
  }

  updateScoresSection() {
    $('#attempts-count').html(this.game.attemptsCount);
    $('#pairs-resolved-count').html(this.game.resolvedPairs);

  }

  hideCardsAfterAttempt() {
    let arrayOfIdsToCover = [];

    //get id numbers to hide
    Object.keys(this.game.cardsInfoObject).forEach((key) => {
      if (this.game.cardsInfoObject[key].resolved === false) {
        arrayOfIdsToCover.push(key);
      }
    });

    //hide them
    $('.image-cover').each(function(){
      let coverNum = $(this)[0].id.split('cover-')[1];
      if (arrayOfIdsToCover.includes(coverNum)){
        $(this).show(0);
      }
    });

    this.cardsTurned = 0;
  }

  createCardElementSet(idx) {

    let $newCardDisplay = $("<article class='card-display' id='article-"+ idx+"'></article>")
    $('#cards-section').append($newCardDisplay);

    let $newImage = $("<figure class='image-figure' id='gif-" + idx + "'></figure>")
    $newImage.css({'background-image': `url('${this.game.cardsInfoObject[idx].url}')`})
    $("#article-" + idx).append($newImage);

    let $newImageCover = $("<div class='image-cover' id='cover-" + idx + "'></div>")
    $newImage.css({'background-image': `url('${this.game.cardsInfoObject[idx].url}')`})
    $("#article-" + idx).append($newImageCover);

    this.setEventListenersForCardDisplay($newImageCover, $newImage)
  }
}

export default GameDisplay;
