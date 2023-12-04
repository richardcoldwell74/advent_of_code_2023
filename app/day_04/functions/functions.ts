type Card = {
  cardId: number;
  winningNumbers: number[];
  yourNumbers: number[];
  yourWinningNumbers: number[];
  totalPoints: number;
};

export const PartA = (inputArray: string[]): number => {
  console.log("inputArray", inputArray);
  let total = 0;
  let CardData: Card[] = [];
  inputArray.forEach((card) => {
    const currentCardId = card.substring(card.indexOf(" "), card.indexOf(":"));
    console.log("card", card);
    let cardNoRemoved = card.slice(card.indexOf(":") + 1);
    console.log("cardNoRemoved", cardNoRemoved);
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
    console.log("yourNums", yourNums);

    CardData.push({
      cardId: +currentCardId,
      winningNumbers: winningRemoveZeros,
      yourNumbers: yourRemoveZeros,
      yourWinningNumbers: [],
      totalPoints: 0,
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
  console.log("CardData", CardData);

  return total;
};

export const PartB = (inputArray: string[]): number => {
  let total = 0;

  return total;
};
