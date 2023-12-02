type Game = {
  gameId: number;
  shownCubes: Round[];
  validGame: boolean;
  MinimumBlue: number;
  MinimumGreen: number;
  MinimumRed: number;
  Power: number;
};

type Round = Cube[];

type Cube = { Colour: string; Number: number };

export type ReturnValues = { partA: number; partB: number };

export const Solutions = (inputArray: string[]): ReturnValues => {
  let retTotal = 0;
  let retPower = 0;
  let theGames: Game[] = [];

  //build game data model
  inputArray.forEach((game) => {
    const currentGameId = game.substring(game.indexOf(" "), game.indexOf(":"));
    let currentGameShownCubes: Round[] = [];
    let currentGameValid: boolean = true;
    let currentGameBlue: number = 0;
    let currentGameGreen: number = 0;
    let currentGameRed: number = 0;
    let currentGamePower: number = 0;
    let cubesOnly = game.slice(game.indexOf(":") + 1).split(/[;]/);

    cubesOnly.forEach((shownSetOfCubes) => {
      let shownSetOfCubesArray = shownSetOfCubes.split(/[,]/);

      let currentRound: Cube[] = [];
      shownSetOfCubesArray.forEach((cube) => {
        let splitCube = cube.trim().split(/[' ']/);

        currentRound.push({
          Colour: splitCube[1],
          Number: +splitCube[0],
        });
      });

      currentGameShownCubes.push(currentRound);

      currentRound.forEach((cube: Cube) => {
        if (cube.Colour === "blue") {
          if (cube.Number > 14) currentGameValid = false;
          if (cube.Number > currentGameBlue) currentGameBlue = cube.Number;
        } else if (cube.Colour === "green") {
          if (cube.Number > 13) currentGameValid = false;
          if (cube.Number > currentGameGreen) currentGameGreen = cube.Number;
        } else if (cube.Colour === "red") {
          if (cube.Number > 12) currentGameValid = false;
          if (cube.Number > currentGameRed) currentGameRed = cube.Number;
        }
      });
    });
    currentGamePower = currentGameBlue * currentGameGreen * currentGameRed;

    // push game to theGames array
    theGames.push({
      gameId: +currentGameId,
      shownCubes: currentGameShownCubes,
      validGame: currentGameValid,
      MinimumBlue: currentGameBlue,
      MinimumGreen: currentGameGreen,
      MinimumRed: currentGameRed,
      Power: currentGamePower,
    });
  });
  theGames.forEach((game: Game) => {
    retPower += game.Power;
    if (game.validGame) {
      retTotal += game.gameId;
    }
  });
  return { partA: retTotal, partB: retPower };
};
