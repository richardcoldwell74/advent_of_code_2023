export type ReturnValues = { partA: number; partB: number };

export const Solutions = (inputArray: string[]): ReturnValues => {
  const parsed = inputArray
    .map((line) => line.split(":")[1].trim())
    .map((nums) => nums.split(/ +/).map((num) => parseInt(num)));

  const total = 0;
  return { partA: total, partB: 0 };
};

export const SolutionsB = (inputArray: string[]): ReturnValues => {
  let totalTwo = 0;

  return { partA: 0, partB: totalTwo };
};
