export type ReturnValues = { partA: number; partB: number };

const totalDistance = (timeHolding: number, totalDuration: number) => {
  return (totalDuration - timeHolding) * timeHolding;
};

export const Solutions = (inputArray: string[]): ReturnValues => {
  const parsed = inputArray
    .map((line) => line.split(":")[1].trim())
    .map((nums) => nums.split(/ +/).map((num) => parseInt(num)));

  const total = parsed[0]
    .map((t: number) =>
      Array(t)
        .fill(0)
        .map((_, t1: number) => totalDistance(t1, t))
    )
    .map((race: number[], i: number) => race.filter((d) => d > parsed[1][i]))
    .reduce((acc: number, v: number[]) => acc * v.length, 1);

  return { partA: total, partB: 0 };
};

export const SolutionsB = (inputArray: string[]): ReturnValues => {
  let totalTwo = 0;
  const parsedPart2 = inputArray.map((line) =>
    parseInt(line.split(":")[1].replace(/ /g, ""))
  );

  for (let x = 0; x <= parsedPart2[0]; x++) {
    const d = totalDistance(x, parsedPart2[0]);
    if (d > parsedPart2[1]) {
      totalTwo++;
    }
  }
  return { partA: 0, partB: totalTwo };
};
