export type ReturnValues = { partA: number; partB: number };

type GridCellData = {
  value: string;
  row: number;
  column: number;
  ValidDirections: string[];
};

const createAndFillTwoDArray = (
  rows: number,
  columns: number,
  defaultValue: GridCellData
): GridCellData[][] => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => defaultValue)
  );
};

export const Solutions = (inputArray: string[]): ReturnValues => {
  // Create grid
  let grid: string[][] = [];
  for (const line of inputArray) {
    const splitLine = line.split("");
    grid.push(splitLine);
  }
  console.log("grid", grid);

  // let gridObject: GridCellData[][] = [];
  let gridObject: GridCellData[][] = createAndFillTwoDArray(
    grid.length,
    grid[0].length,
    {
      value: "",
      row: 0,
      column: 0,
      ValidDirections: [],
    }
  );

  grid.forEach((row, r) => {
    row.forEach((column, c) => {
      gridObject[r][c] = {
        value: column,
        row: r,
        column: c,
        ValidDirections: getValidMovements(column, r, c),
      };
    });
  });

  console.log("gridObject after", gridObject);
  gridObject.forEach((element) => {
    console.log("element", element);
  });
  // find start position
  let startPosition = { row: 0, column: 0 };
  grid.map((row, r) => {
    row.find((column, c) => {
      if (column === "S") {
        startPosition.row = r;
        startPosition.column = c;
      }
    });
  });
  console.log("startPosition", startPosition);

  let part1 = 0;
  let part2 = 0;
  return { partA: part1, partB: part2 };
};

const getValidMovements = (value: string, r: number, c: number): string[] => {
  let ret: string[] = [];
  switch (value) {
    case "|":
      ret.push("N");
      ret.push("S");
      break;
    case "-":
      ret.push("E");
      ret.push("W");
      break;
    case "L":
      ret.push("N");
      ret.push("E");
      break;
    case "J":
      ret.push("N");
      ret.push("W");
      break;
    case "7":
      ret.push("S");
      ret.push("W");
      break;
    case "F":
      ret.push("S");
      ret.push("E");
      break;
  }

  return ret;
};

const getConnectedNeighbours = (
  value: string,
  r: number,
  c: number
): string[] => {
  let ret: string[] = [];
  switch (value) {
    case "7":
      ret.push("S");
      ret.push("W");
      break;
  }
  return ret;
};
