type Card = {
  cardId: number;
  winningNumbers: number[];
  yourNumbers: number[];
  yourWinningNumbers: number[];
  totalPoints: number;
  numberOfThisTicket: number;
};

export type ReturnValues = { partA: number; partB: number };

export const Solutions = (inputArray: string[]): ReturnValues => {
  let total = 0;
  let totalTwo = 0;
  let CardData: Card[] = [];
  inputArray.forEach((card) => {
    const currentCardId = card.substring(card.indexOf(" "), card.indexOf(":"));
    let cardNoRemoved = card.slice(card.indexOf(":") + 1);
    let winning = cardNoRemoved
      .substring(0, cardNoRemoved.indexOf("|"))
      .trim()
      .split(" ");
    0;

    const winningNums = winning.map(Number);
    const winningRemoveZeros = winningNums.filter(function (a) {
      return a !== 0;
    });
    let your = cardNoRemoved
      .slice(cardNoRemoved.indexOf("|") + 1)
      .trim()
      .split(" ");

    const yourNums = your.map(Number);
    const yourRemoveZeros = yourNums.filter(function (a) {
      return a !== 0;
    });

    CardData.push({
      cardId: +currentCardId,
      winningNumbers: winningRemoveZeros,
      yourNumbers: yourRemoveZeros,
      yourWinningNumbers: [],
      totalPoints: 0,
      numberOfThisTicket: 1,
    });
  });

  CardData.forEach((card) => {
    const intersection = card.winningNumbers.filter((element) =>
      card.yourNumbers.includes(element)
    );
    let score = 0;
    intersection.forEach((number, index) => {
      if (index === 0) {
        score = 1;
      } else {
        score = score * 2;
      }
    });
    card.yourWinningNumbers = intersection;
    card.totalPoints = score;
    total += score;
  });

  for (let index = 0; index < CardData.length; index++) {
    // CardData.forEach((card, index) => {
    // count number of winninhg numbers and
    // card.yourWinningNumbers.length
    // console.log("card.numberOfThisTicket", CardData[index].numberOfThisTicket);
    for (
      let noOfTickets = 0;
      noOfTickets < CardData[index].numberOfThisTicket;
      noOfTickets++
    ) {
      if (CardData[index].yourWinningNumbers.length > 0) {
        for (
          let winCount = 0;
          winCount < CardData[index].yourWinningNumbers.length;
          winCount++
        ) {
          // console.log("index ", index, " winCount +1 ", winCount + 1);
          CardData[index + winCount + 1].numberOfThisTicket += 1;
          // numbers.push(CardData[index].cardId + winCount + 1);
        }
      }
    }
  }

  // console.log("CardData", CardData);

  CardData.forEach((card) => {
    totalTwo += card.numberOfThisTicket;
  });

  return { partA: total, partB: totalTwo };
};
