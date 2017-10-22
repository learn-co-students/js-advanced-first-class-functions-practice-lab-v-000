// Code your solution in this file!
const logDriverNames = function(driversArray){
  driversArray.map(function(driver){
    console.log(driver.name);
  })
}
// logDriverNames() — Receives an array of driver objects
// and logs the name attribute of each driver to the
// console.

const logDriversByHometown = function(driversArray, location){
  driversArray.filter(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}
// logDriversByHometown() — Receives an array of driver
// objects as the first argument and a location as the
// second argument. The function logs to the console the
// name attribute of each driver whose hometown matches
// the string passed in as the 'location' argument.

const driversByRevenue = function(driversArray){
  return driversArray.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}
// sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });
// driversByRevenue() — Receives an array of driver
// objects and returns a new array of driver objects
// sorted by their revenue attribute from lowest to
// highest.

const driversByName = function(driversArray){
  return driversArray.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}
// driversByName() — Receives an array of driver objects
// and returns a new array of driver objects sorted by
// their name attribute from A to Z. Here, you may have
// to use the String.prototype.localeCompare() method.

const totalRevenue = function(driversArray){
  let revenue = 0;
  driversArray.forEach(function(driver){
    revenue += driver.revenue;
  })
  return revenue;
}
// totalRevenue() — Receives an array of driver objects
// and returns the sum of the revenue earned by each
// driver.

const averageRevenue = function(driversArray){
  let average = 0;
  driversArray.forEach(function(driver){
    average += driver.revenue;
  })
  return average / driversArray.length;
}
// averageRevenue() — Receives an array of driver
// objects and returns the average revenue earned by each
// driver.
