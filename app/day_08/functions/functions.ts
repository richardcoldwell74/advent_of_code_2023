export type ReturnValues = { partA: number; partB: number };

export const Solutions = (inputArray: string[]): ReturnValues => {
  // const parsed = inputArray
  //   .map((line) => line.split(":")[1].trim())
  //   .map((nums) => nums.split(/ +/).map((num) => parseInt(num)));

  const nodes: Record<string, { L: string; R: string }> = {};

  for (let i = 1; i < inputArray.length; i++) {
    const line = inputArray[i];
    nodes[line.substring(0, 3)] = {
      L: line.substring(7, 10),
      R: line.substring(12, 15),
    };
  }

  const instructions = inputArray[0].split("") as Array<"R" | "L">;

  let steps = 0;
  let curr = "AAA";

  let i = 0;
  while (curr !== "ZZZ") {
    steps++;
    curr = nodes[curr][instructions[i]];
    i = i + 1 < instructions.length ? i + 1 : 0;
  }

  let part1 = steps;

  for (let i = 1; i < inputArray.length; i++) {
    const line = inputArray[i];
    nodes[line.substring(0, 3)] = {
      L: line.substring(7, 10),
      R: line.substring(12, 15),
    };
  }

  const starts = [];
  for (const key in nodes) {
    if (Object.prototype.hasOwnProperty.call(nodes, key) && key[2] === "A") {
      starts.push(key);
    }
  }

  const lengths = starts.map((start) => {
    let steps = 0;
    let curr = start;
    for (let i = 0; curr[2] !== "Z"; i = (i + 1) % instructions.length) {
      steps++;
      curr = nodes[curr][instructions[i]];
    }
    return steps;
  });

  const gcd = (a: number, b: number) => {
    while (b > 0) [a, b] = [b, a % b];
    return a;
  };
  const lcm = (a: number, b: number) => (a * b) / gcd(a, b);
  let part2 = lengths.reduce((n, x) => lcm(x, n), 1);

  return { partA: part1, partB: part2 };
};
