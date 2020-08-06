class Game {
  constructor(){
    this.arrayOfGifUrls = [];
    this.cardsInfoObject = {};
    this.inplay = false;
    this.completed = false;
  }

  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  createCardsInfoObject() {
    //creat copy the array that contains the contents doubled
    let doubledArray = this.arrayOfGifUrls.concat(this.arrayOfGifUrls);

    //randomize the array
    this.shuffleArray(doubledArray);

    //flll the onject
    doubledArray.forEach((url, i) => {
      this.cardsInfoObject[i] = {
        url: url,
        turned: false,
        resolved: false
      }
    });
  }
}

export default Game;
