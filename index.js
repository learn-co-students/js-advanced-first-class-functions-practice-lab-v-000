// Code your solution in this file!


const logDriverNames = function(drivers) {

     drivers.forEach(function(driver) {
  console.log(driver.name);
});
}

// logDriverNames() — Receives an array of driver objects
// and logs the name attribute of each driver to the console.

// arr.forEach(function callback(currentValue[, index[, array]]) {
//     //your iterator
// }[, thisArg]);


const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(driver){
      if (driver.hometown === location){
        console.log(driver.name);
      }
  });
}

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as
// the second argument. The function logs to the console the name attribute of each
// driver whose hometown matches the string passed in as the 'location' argument.


const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

// cars.sort(function(a, b) {
//     return a.speed - b.speed;
// })

// for(var i in cars)
//     document.writeln(cars[i].name)
 // driversByRevenue() - Receives an array of driver objects and returns a new array of driver objects sorted by their
 // revenue attribute from lowest to highest.

 const driversByName = function(drivers) {
   return drivers.slice().sort(function(a, b){
     return a.name.localeCompare(b.name);
   })
 }

const totalRevenue = function(drivers) {
  return drivers.reduce(function(sum, currentValue){
    return currentValue.revenue + sum;
  }, 0);
}
// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// totalRevenue() — Receives an array of driver objects and returns the sum of the
// revenue earned by each driver.


const averageRevenue = function(drivers){
    return totalRevenue(drivers) / drivers.length;
  }


// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
