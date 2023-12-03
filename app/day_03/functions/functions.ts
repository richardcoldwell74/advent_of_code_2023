export type ReturnValues = { partA: number; partB: number };

type NumberPositon = {
  value: string;
  xPos: number;
  yPos: number;
  length: number;
  isValidPart: boolean;
};

type SymbolPositon = {
  value: string;
  xPos: number;
  yPos: number;
  isAsterix: boolean;
  numbersForGears: number[];
};

type Coordinates = {
  valueBeingChecked: number;
  xPos: number;
  yPos: number;
};

type AdjacentSymbolReturnValue = {
  hasAdjacentSymbol: boolean;
  isAsterix: boolean;
  index: number;
  retNumber: number;
};

const isStringANumber = (string: string): boolean => {
  return /^[0-9]*$/.test(string);
};

const isStringASymbol = (string: string): boolean => {
  //TODO
  const isNumber = /^[0-9]*$/.test(string);
  const isPeriod = string === ".";
  if (isNumber || isPeriod) {
    return false;
  } else {
    return true;
  }
};

const checkAdjacentForSymbol = (
  coordinates: Coordinates[],
  symbolPositionStore: SymbolPositon[]
): AdjacentSymbolReturnValue => {
  let retValue: AdjacentSymbolReturnValue = {
    hasAdjacentSymbol: false,
    isAsterix: false,
    index: 0,
    retNumber: 0,
  };

  symbolPositionStore.forEach((symbol, symbolIndex) => {
    coordinates.forEach((coordToCheck) => {
      //check NW
      if (
        symbol.xPos === coordToCheck.xPos - 1 &&
        symbol.yPos === coordToCheck.yPos - 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check N
      else if (
        symbol.xPos === coordToCheck.xPos - 1 &&
        symbol.yPos === coordToCheck.yPos
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check NE
      else if (
        symbol.xPos === coordToCheck.xPos - 1 &&
        symbol.yPos === coordToCheck.yPos + 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check E
      else if (
        symbol.xPos === coordToCheck.xPos &&
        symbol.yPos === coordToCheck.yPos + 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check SE
      else if (
        symbol.xPos === coordToCheck.xPos + 1 &&
        symbol.yPos === coordToCheck.yPos + 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check S
      else if (
        symbol.xPos === coordToCheck.xPos + 1 &&
        symbol.yPos === coordToCheck.yPos
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check SW
      else if (
        symbol.xPos === coordToCheck.xPos + 1 &&
        symbol.yPos === coordToCheck.yPos - 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
      //check W
      else if (
        symbol.xPos === coordToCheck.xPos &&
        symbol.yPos === coordToCheck.yPos - 1
      ) {
        retValue.hasAdjacentSymbol = true;
        if (symbol.value === "*") {
          retValue.retNumber = coordToCheck.valueBeingChecked;
          retValue.index = symbolIndex;
        }
      }
    });
  });

  return retValue;
};

export const Solutions = (inputArray: string[]): ReturnValues => {
  let total = 0;
  let numberPositionStore: NumberPositon[] = [];
  let symbolPositionStore: SymbolPositon[] = [];
  let storingNumber: boolean = false;
  let tempValue: string = "";
  let tempX: number = 0;
  let tempY: number = 0;
  let tempLength: number = 0;

  // store numbers and there x y positions and length
  inputArray.forEach((line, x) => {
    for (let y = 0; y < line.length; y++) {
      if (!storingNumber && isStringANumber(line[y].toString())) {
        storingNumber = true;
        tempX = x;
        tempY = y;
        tempLength = 1;
        tempValue = line[y];
      } else if (storingNumber && isStringANumber(line[y].toString())) {
        tempLength += 1;
        tempValue = tempValue + line[y];
      } else if (storingNumber && !isStringANumber(line[y].toString())) {
        numberPositionStore.push({
          value: tempValue,
          xPos: tempX,
          yPos: tempY,
          length: tempLength,
          isValidPart: false,
        });
        tempValue = "";
        storingNumber = false;
      }
    }
  });

  // store symbol positions
  inputArray.forEach((line, x) => {
    for (let y = 0; y < line.length; y++) {
      if (line[y].toString() !== "." && !isStringANumber(line[y].toString())) {
        symbolPositionStore.push({
          value: line[y],
          xPos: x,
          yPos: y,
          isAsterix: line[y] === "*",
          numbersForGears: [],
        });
        tempValue = "";
        storingNumber = false;
      }
    }
  });
  // loop through each number and check if there is a special symbol adjacent
  numberPositionStore.forEach((storedNumber, index) => {
    let coOrdsToPass: Coordinates[] = [];
    for (let index = 0; index < storedNumber.length; index++) {
      coOrdsToPass.push({
        valueBeingChecked: +storedNumber.value,
        xPos: storedNumber.xPos,
        yPos: storedNumber.yPos + index,
      });
    }

    const retValue = checkAdjacentForSymbol(coOrdsToPass, symbolPositionStore);
    storedNumber.isValidPart = retValue.hasAdjacentSymbol;
    if (retValue.retNumber !== 0) {
      symbolPositionStore[retValue.index].numbersForGears.push(
        retValue.retNumber
      );
    }
  });

  let gearRatios = 0;

  symbolPositionStore.forEach((symbol) => {
    if (symbol.numbersForGears.length === 2) {
      gearRatios += symbol.numbersForGears[0] * symbol.numbersForGears[1];
    }
  });
  numberPositionStore.forEach((value) => {
    if (value.isValidPart) {
      total += +value.value;
    }
  });
  return { partA: total, partB: gearRatios };
};
