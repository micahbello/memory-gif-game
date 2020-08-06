import {apiKey} from './constants.js';
import Game from './game.js';

class GameDisplay {
  constructor(setsOfCards, secondsToDisplay, $cardsDisplay) {
    this.setsOfCards = setsOfCards;
    this.secondsToDisplay = secondsToDisplay;
    this.$cardsDisplay = $cardsDisplay;
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

    setTimeout(function(){
      $('.image-cover').each(function() {
        $(this).show();
      });
    }, this.secondsToDisplay * 1000)
  }

  setEventListenersForCardDisplay($imageCover, $image) {
    //set event listeners MOVE TO GAME CLASS
    $($imageCover).click(function(){
      $(this).hide();
    })

    $($image).click(function(){
      $($imageCover).show();
    })
  }

  createCardElementSet(idx) {

    let $newCardDisplay = $("<article class='card-display' id='article-"+ idx+"'></article>")
    $('#cards-section').append($newCardDisplay);

    let $newImage = $("<figure class='image-figure'></figure>")
    $newImage.css({'background-image': `url('${this.game.cardsInfoObject[idx].url}')`})
    $("#article-" + idx).append($newImage);

    let $newImageCover = $("<div class='image-cover'></div>")
    $newImage.css({'background-image': `url('${this.game.cardsInfoObject[idx].url}')`})
    $("#article-" + idx).append($newImageCover);

    this.setEventListenersForCardDisplay($newImageCover, $newImage)
  }
}

export default GameDisplay;
