export type ReturnValues = { partA: number; partB: number };

export const Solutions = (inputArray: string[]): ReturnValues => {
  // Part 1
  let part1 = 0;
  for (const line of inputArray) {
    const numbers = line.split(/ +/).map(Number);
    const numbersLen = numbers.length;
    let lastElement = numbers.at(-1)!;

    for (let x = 1; x < numbersLen; x++) {
      for (let y = numbersLen - 1; y >= x; y--) {
        numbers[y] -= numbers[y - 1];
      }
      lastElement += numbers.at(-1)!;
    }
    part1 += lastElement;
  }

  // Part 2
  let part2 = 0;
  for (const line of inputArray) {
    const numbers = line.split(/ +/).map(Number).reverse();
    const numbersLen = numbers.length;
    let lastElement = numbers.at(-1)!;

    for (let x = 1; x < numbersLen; x++) {
      for (let y = numbersLen - 1; y >= x; y--) {
        numbers[y] -= numbers[y - 1];
      }
      lastElement += numbers.at(-1)!;
    }
    part2 += lastElement;
  }

  return { partA: part1, partB: part2 };
};
