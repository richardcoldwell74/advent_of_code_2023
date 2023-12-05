export type ReturnValues = { partA: number; partB: number };

// export const InitializeMap = (map: Map<string, string>) => {
//   // for (let index = 0; index < 100; index++) {
//   //   map.set(index.toString(), index.toString());
//   // }
// };

type MapObject = {
  source: number;
  destination: number;
  length: number;
};

export const Solutions = (inputArray: string[]): ReturnValues => {
  let partA = 0;
  let partB = 0;
  let tempArray: string[][] = [];
  let temp: string[] = [];
  inputArray.forEach((line, index) => {
    if (line.length !== 0) {
      temp.push(line);
    } else {
      tempArray.push(temp);
      temp = [];
    }
  });
  console.log(tempArray);

  // Get Array of seed numbers
  const seedNumbers: number[] = tempArray[0][0]
    .slice(tempArray[0][0].indexOf(":") + 1)
    .trim()
    .split(" ")
    .map(Number);
  console.log("seedNumbers", seedNumbers);

  //Seed To Soil V2
  let seedToSoilMapObject: MapObject[] = [];
  const seedToSoil = tempArray[1].slice(1);
  seedToSoil.forEach((section) => {
    const temp = section.split(" ");
    seedToSoilMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("seedToSoilMapObject ", seedToSoilMapObject);

  seedNumbers.forEach((seed, index) => {
    for (const seedToSoilMap of seedToSoilMapObject) {
      if (
        seed >= seedToSoilMap.source &&
        seed <= seedToSoilMap.source + seedToSoilMap.length
      ) {
        const diff = seedToSoilMap.destination - seedToSoilMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after soil", seedNumbers);

  // soil To fertilizer V2
  let soilToFertilizerMapObject: MapObject[] = [];
  const soilToFertilizer = tempArray[2].slice(1);
  soilToFertilizer.forEach((section) => {
    const temp = section.split(" ");
    soilToFertilizerMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("soilToFertilizerMapObject ", soilToFertilizerMapObject);

  seedNumbers.forEach((seed, index) => {
    for (const soilToFertilizerMap of soilToFertilizerMapObject) {
      if (
        seed >= soilToFertilizerMap.source &&
        seed <= soilToFertilizerMap.source + soilToFertilizerMap.length
      ) {
        const diff =
          soilToFertilizerMap.destination - soilToFertilizerMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after fertilizer", seedNumbers);

  // fertilizer to water V2
  let fertilizerToWaterMapObject: MapObject[] = [];
  const fertilizerToWater = tempArray[3].slice(1);
  fertilizerToWater.forEach((section) => {
    const temp = section.split(" ");
    fertilizerToWaterMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("fertilizerToWaterMapObject ", fertilizerToWaterMapObject);
  seedNumbers.forEach((seed, index) => {
    for (const fertilizerToWaterMap of fertilizerToWaterMapObject) {
      if (
        seed >= fertilizerToWaterMap.source &&
        seed <= fertilizerToWaterMap.source + fertilizerToWaterMap.length
      ) {
        const diff =
          fertilizerToWaterMap.destination - fertilizerToWaterMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after Water", seedNumbers);

  //  water to light V2
  let waterToLightMapObject: MapObject[] = [];
  const WaterToLight = tempArray[4].slice(1);
  WaterToLight.forEach((section) => {
    const temp = section.split(" ");
    waterToLightMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("waterToLightMapObject ", waterToLightMapObject);
  seedNumbers.forEach((seed, index) => {
    for (const waterToLightMap of waterToLightMapObject) {
      if (
        seed >= waterToLightMap.source &&
        seed <= waterToLightMap.source + waterToLightMap.length
      ) {
        const diff = waterToLightMap.destination - waterToLightMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after Light", seedNumbers);

  //  Light to Temperature V2
  let lightToTemperatureMapObject: MapObject[] = [];
  const lightToTemperature = tempArray[5].slice(1);
  lightToTemperature.forEach((section) => {
    const temp = section.split(" ");
    lightToTemperatureMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("lightToTemperatureMapObject ", lightToTemperatureMapObject);
  seedNumbers.forEach((seed, index) => {
    for (const lightToTemperatureMap of lightToTemperatureMapObject) {
      if (
        seed >= lightToTemperatureMap.source &&
        seed <= lightToTemperatureMap.source + lightToTemperatureMap.length
      ) {
        const diff =
          lightToTemperatureMap.destination - lightToTemperatureMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after Temperature", seedNumbers);

  //  Temperature to Humidity V2
  let temperatureToHumidityMapObject: MapObject[] = [];
  const temperatureToHumidity = tempArray[6].slice(1);
  temperatureToHumidity.forEach((section) => {
    const temp = section.split(" ");
    temperatureToHumidityMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log(
    "temperatureToHumidityMapObject ",
    temperatureToHumidityMapObject
  );
  seedNumbers.forEach((seed, index) => {
    for (const temperatureToHumidityMap of temperatureToHumidityMapObject) {
      if (
        seed >= temperatureToHumidityMap.source &&
        seed <=
          temperatureToHumidityMap.source + temperatureToHumidityMap.length
      ) {
        const diff =
          temperatureToHumidityMap.destination -
          temperatureToHumidityMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after Humidity", seedNumbers);

  //  Humidity to Location V2
  let humidityToLocationMapObject: MapObject[] = [];
  const humidityToLocation = tempArray[7].slice(1);
  humidityToLocation.forEach((section) => {
    const temp = section.split(" ");
    humidityToLocationMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });
  console.log("humidityToLocationMapObject ", humidityToLocationMapObject);
  seedNumbers.forEach((seed, index) => {
    for (const humidityToLocationMap of humidityToLocationMapObject) {
      if (
        seed >= humidityToLocationMap.source &&
        seed <= humidityToLocationMap.source + humidityToLocationMap.length
      ) {
        const diff =
          humidityToLocationMap.destination - humidityToLocationMap.source;
        seedNumbers[index] = seed + diff;
        break;
      }
    }
  });
  console.log("seedNumbers after location", seedNumbers);

  partA = Math.min(...seedNumbers);
  console.log("min", partA);

  return { partA: partA, partB: partB };
};

type seedMap = {
  start: number;
  length: number;
};
export const SolutionsB = (inputArray: string[]): ReturnValues => {
  const arrayOfMinNumbersManual: number[] = [
    2509416930, 1339903174, 77781697, 296767779, 555467313, 524321155,
    3794392721, 3851826931, 278431577, 299324488, 1825631461, 187991300,
    230668725, 59370573, 2771791393, 166973311, 2886036244, 2646025192,
    2886036244, 856589248, 1322210923,
  ];

  // index 0 = 2509416930
  // index 1 = 1339903174
  // index 2 = 77781697, 296767779, 555467313
  // index 3 = 524321155, 3794392721, 3851826931
  // index 4 = 278431577
  // index 5 = 299324488, 1825631461, 187991300, 230668725,59370573, 2771791393
  // index 6 = 166973311,
  // index 7 = 2646025192
  // index 8 = 2886036244, 856589248
  // index 9 = 1322210923

  arrayOfMinNumbersManual.sort(function (a, b) {
    return a - b;
  });
  console.log("arrayOfMinNumbersManual", arrayOfMinNumbersManual);

  let partA = 0;
  let partB = 0;
  let tempArray: string[][] = [];
  let temp: string[] = [];
  inputArray.forEach((line, index) => {
    if (line.length !== 0) {
      temp.push(line);
    } else {
      tempArray.push(temp);
      temp = [];
    }
  });

  // console.log("inputArray", inputArray);

  // Get Array of seed numbers
  const tempSeedNumbers: number[] = tempArray[0][0]
    .slice(tempArray[0][0].indexOf(":") + 1)
    .trim()
    .split(" ")
    .map(Number);
  let seedMap: seedMap[] = [];
  tempSeedNumbers.forEach((seed, index) => {
    {
      if (index % 2 === 0) {
        seedMap.push({
          start: tempSeedNumbers[index],
          length: tempSeedNumbers[index + 1],
        });
      }
    }
  });
  console.log("tempSeedNumbers", tempSeedNumbers);
  console.log("seedMap", seedMap);
  // const newSeedNumbers: number[] = [79, 14, 55, 13];
  const newSeedNumbers: number[] = [];

  // seedMap.forEach((map) => {
  // let tempStart = seedMap[2].start;
  let tempStart = 3591380151;

  // for (let index = 0; index < seedMap[7].length; index++) {
  for (let index = 0; index < 78996923; index++) {
    newSeedNumbers.push(tempStart);
    tempStart++;
  }
  // });
  // console.log("line 296 - newSeedNumbers", newSeedNumbers);
  // while(seedMap[0].length) {
  //     console.log(seedMap[0].splice(0,10));
  // }

  // SET UP MAP OBJECTS
  //Seed To Soil V2
  let seedToSoilMapObject: MapObject[] = [];
  const seedToSoil = tempArray[1].slice(1);
  seedToSoil.forEach((section) => {
    const temp = section.split(" ");
    seedToSoilMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  // soil To fertilizer V2
  let soilToFertilizerMapObject: MapObject[] = [];
  const soilToFertilizer = tempArray[2].slice(1);
  soilToFertilizer.forEach((section) => {
    const temp = section.split(" ");
    soilToFertilizerMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  // fertilizer to water V2
  let fertilizerToWaterMapObject: MapObject[] = [];
  const fertilizerToWater = tempArray[3].slice(1);
  fertilizerToWater.forEach((section) => {
    const temp = section.split(" ");
    fertilizerToWaterMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  //  water to light V2
  let waterToLightMapObject: MapObject[] = [];
  const WaterToLight = tempArray[4].slice(1);
  WaterToLight.forEach((section) => {
    const temp = section.split(" ");
    waterToLightMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  //  Light to Temperature V2
  let lightToTemperatureMapObject: MapObject[] = [];
  const lightToTemperature = tempArray[5].slice(1);
  lightToTemperature.forEach((section) => {
    const temp = section.split(" ");
    lightToTemperatureMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  //  Temperature to Humidity V2
  let temperatureToHumidityMapObject: MapObject[] = [];
  const temperatureToHumidity = tempArray[6].slice(1);
  temperatureToHumidity.forEach((section) => {
    const temp = section.split(" ");
    temperatureToHumidityMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  //  Humidity to Location V2
  let humidityToLocationMapObject: MapObject[] = [];
  const humidityToLocation = tempArray[7].slice(1);
  humidityToLocation.forEach((section) => {
    const temp = section.split(" ");
    humidityToLocationMapObject.push({
      source: +temp[1],
      destination: +temp[0],
      length: +temp[2],
    });
  });

  //NEW LOOP SECTION FOR PART 2

  //seedNunbersFinal

  newSeedNumbers.forEach((seedNumber, index) => {
    //Seed To Soil V2
    // console.log("seedNumber", seedNumber);
    for (const seedToSoilMap of seedToSoilMapObject) {
      if (
        newSeedNumbers[index] >= seedToSoilMap.source &&
        newSeedNumbers[index] <= seedToSoilMap.source + seedToSoilMap.length
      ) {
        const diff = seedToSoilMap.destination - seedToSoilMap.source;

        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }

    // // soil To fertilizer V2
    for (const soilToFertilizerMap of soilToFertilizerMapObject) {
      if (
        newSeedNumbers[index] >= soilToFertilizerMap.source &&
        newSeedNumbers[index] <=
          soilToFertilizerMap.source + soilToFertilizerMap.length
      ) {
        const diff =
          soilToFertilizerMap.destination - soilToFertilizerMap.source;
        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }

    // // fertilizer to water V2
    for (const fertilizerToWaterMap of fertilizerToWaterMapObject) {
      if (
        newSeedNumbers[index] >= fertilizerToWaterMap.source &&
        newSeedNumbers[index] <=
          fertilizerToWaterMap.source + fertilizerToWaterMap.length
      ) {
        const diff =
          fertilizerToWaterMap.destination - fertilizerToWaterMap.source;
        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;

        break;
      }
    }

    // //  water to light V2
    for (const waterToLightMap of waterToLightMapObject) {
      if (
        newSeedNumbers[index] >= waterToLightMap.source &&
        newSeedNumbers[index] <= waterToLightMap.source + waterToLightMap.length
      ) {
        const diff = waterToLightMap.destination - waterToLightMap.source;
        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }

    //  Light to Temperature V2

    for (const lightToTemperatureMap of lightToTemperatureMapObject) {
      if (
        newSeedNumbers[index] >= lightToTemperatureMap.source &&
        newSeedNumbers[index] <=
          lightToTemperatureMap.source + lightToTemperatureMap.length
      ) {
        const diff =
          lightToTemperatureMap.destination - lightToTemperatureMap.source;
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }

    // //  Temperature to Humidity V2
    for (const temperatureToHumidityMap of temperatureToHumidityMapObject) {
      if (
        newSeedNumbers[index] >= temperatureToHumidityMap.source &&
        newSeedNumbers[index] <=
          temperatureToHumidityMap.source + temperatureToHumidityMap.length
      ) {
        const diff =
          temperatureToHumidityMap.destination -
          temperatureToHumidityMap.source;
        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }

    // //  Humidity to Location V2
    for (const humidityToLocationMap of humidityToLocationMapObject) {
      if (
        newSeedNumbers[index] >= humidityToLocationMap.source &&
        newSeedNumbers[index] <=
          humidityToLocationMap.source + humidityToLocationMap.length
      ) {
        const diff =
          humidityToLocationMap.destination - humidityToLocationMap.source;
        // seedNunbersFinal.push(seedNumber + diff);
        newSeedNumbers[index] = newSeedNumbers[index] + diff;
        break;
      }
    }
  });

  // console.log("seedNumbersFinal", seedNunbersFinal);
  // partB = Math.min(...newSeedNumbers);
  // console.log("min", partB);

  newSeedNumbers.sort(function (a, b) {
    return a - b;
  });
  // const forNow = newSeedNumbers.slice(0, 2000000);
  // const newMin = Math.min(...forNow);
  console.log("new min", newSeedNumbers[0]);

  // const arrayOfMinNumbersManual: number[] = [2509416930, 1339903174, 278431577, 2646025192];

  // arrayOfMinNumbersManual.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log('arrayOfMinNumbersManual',arrayOfMinNumbersManual)

  return { partA: partA, partB: partB };
};
