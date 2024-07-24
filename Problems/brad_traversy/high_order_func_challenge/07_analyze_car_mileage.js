function analyzeCarMileage(cars) {
  const onlyMileage = [];
  cars.map((car) => onlyMileage.push(car.mileage));

  const highestMileage = Math.max(...onlyMileage);
  const lowestMileage = Math.min(...onlyMileage);

  const highestMileageCar = cars[onlyMileage.indexOf(highestMileage)];
  const lowestMileageCar = cars[onlyMileage.indexOf(lowestMileage)];
  const totalMileage = cars.reduce((total, car) => total + car.mileage, 0);
  const average = totalMileage / cars.length;
  console.log(average);

  return {
    average: parseFloat(average.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
  { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

console.log(analyzeCarMileage(cars));
