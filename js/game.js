class Game {
  constructor(){
    this.arrayOfGifUrls = [];
    this.cardsInfoObject = {};
    this.inplay = false;
    this.completed = false;
    this.turnedCardNumber = null;
    this.attemptsCount = 0;
    this.resolvedPairs = 0;
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
        resolved: false
      }
    });
  }

  isGameOver() {
    return this.resolvedPairs === this.arrayOfGifUrls.length;
  }

  handleCoverClick(coverNumber) {
    if (this.turnedCardNumber === null) { //first turned card
      this.turnedCardNumber = coverNumber;
    } else { //second turned card
      let turnedCardNumber = this.turnedCardNumber;

      if (this.cardsInfoObject[turnedCardNumber].url === this.cardsInfoObject[coverNumber].url) { //match
        console.log('Match');
        this.turnedCardNumber = null;

        this.cardsInfoObject[turnedCardNumber].resolved = true;
        this.cardsInfoObject[coverNumber].resolved = true;
        this.resolvedPairs++;
      } else { //no match
        this.turnedCardNumber = null;
      }

      this.attemptsCount++;
    }

    if (this.isGameOver()) {
      console.log("over");
    }
  }
}

export default Game;
