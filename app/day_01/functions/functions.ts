export const PartA = (inputArray: string[]): number => {
  let total = 0;
  inputArray.forEach((line) => {
    let justNumbers = line.replace(/[^0-9]/g, "");
    if (justNumbers) {
      justNumbers.length === 1
        ? (total += +(justNumbers[0] + justNumbers[0]))
        : (total += +(justNumbers[0] + justNumbers[justNumbers.length - 1]));
    }
  });

  return total;
};

export const PartB = (inputArray: string[]): number => {
  let total = 0;
  inputArray.forEach((line) => {
    const wordsChecked = line
      .split("")
      .map((char, index) => {
        const current = line.slice(index);
        if (current.startsWith("one")) return "1";
        if (current.startsWith("two")) return "2";
        if (current.startsWith("three")) return "3";
        if (current.startsWith("four")) return "4";
        if (current.startsWith("five")) return "5";
        if (current.startsWith("six")) return "6";
        if (current.startsWith("seven")) return "7";
        if (current.startsWith("eight")) return "8";
        if (current.startsWith("nine")) return "9";
        return char;
      })
      .join("");
    let justNumbers = wordsChecked.replace(/[^0-9]/g, "");
    if (justNumbers) {
      justNumbers.length === 1
        ? (total += +(justNumbers[0] + justNumbers[0]))
        : (total += +(justNumbers[0] + justNumbers[justNumbers.length - 1]));
    }
  });

  return total;
};
