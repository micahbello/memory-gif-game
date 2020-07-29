const apiKey = "RO9th90ycIJIKwggbLnRVARPCjqw45up&limit=32";
let numberOfSets = 6;
let arrayOfGifUrls = [];

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function retrieveGifUrl(){
  return $.ajax({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey,
    type: 'GET'
  });
}

function fillArray(){
  showLoadingScreen();
  if (arrayOfGifUrls.length < numberOfSets) {
    retrieveGifUrl()
    .then((results)=> {
      arrayOfGifUrls.push(results.data.images.downsized.url);
      fillArray();
    })
  } else {
    fillDOM();
  }
}

function fillDOM() {
  //copy the array and add it to orignal
  arrayOfGifUrls = arrayOfGifUrls.concat(arrayOfGifUrls);

  //randomize
  shuffleArray(arrayOfGifUrls);

  for (let i = 0; i < arrayOfGifUrls.length; i++) {
    createCardElementSet(i);
  }

  setStylingOnCards();
  hideLoadingScreen();
}

function setStylingOnCards() {
  /*I want the cards to always display in 2 rows.*/
  /*Therefore, width for each card will be 100/(numberOfSets)*/
  $('.card-display').width(`${100/(numberOfSets)}%`);
  $('.card-display').height(100);

  // $('figure').addClass('card-figure');
  // /*I want the cards to always display in 2 rows.*/
  // /*Therefore, width for each card will be 100/(numberOfSets)*/
  // $('.card-figure').width(`${100/(numberOfSets)}%`);
  // $('.card-figure').height(100);

}

function setUpGame(){
  fillArray();
}

function showLoadingScreen() {
  $('#loading-screen').show();
}

function hideLoadingScreen() {
  setTimeout(function(){
    $('#loading-screen').hide();
  }, 3000); //allow the dom 3 seconds to render the images
}

function createCardElementSet(idx) {

  let $newCardDisplay = $("<article class='card-display' id='article-"+ idx+"'></article>")
  $('#cards-section').append($newCardDisplay);

  let $newImage = $("<figure class='image-figure'></figure>")
  $newImage.css({'background-image': `url('${arrayOfGifUrls[idx]}')`})
  $("#article-" + idx).append($newImage);

  let $newImageCover = $("<div class='image-cover'></div>")
  $newImage.css({'background-image': `url('${arrayOfGifUrls[idx]}')`})
  $("#article-" + idx).append($newImageCover);

  //set event listeners
  $($newImage).click(function(){
    $($newImageCover).show();
  })

  $($newImageCover).click(function(){
    $(this).hide();
  })

}

//============================
$(document).ready(function(){
  setUpGame();
});
