const car = {
    carName : "Creta 5x",
    company : "Hundai",
    launchYear : 2017,
}

const carEngine = {
    enginPower : "1499CC",
    maxPower : "113 BHP" 
}

console.log(`1. Merging two object by using object.assign().`);
let mergeCar = Object.assign(car,carEngine);
console.log(`Details of car are :`, mergeCar);

console.log(`====================================================================\n`);
console.log(`1. Merging two object by using Spread Operator.`);
let spreadCar = {...car,...carEngine};
console.log(`The car details is :`, spreadCar);