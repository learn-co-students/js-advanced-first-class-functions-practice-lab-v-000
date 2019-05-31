// Code your solution in this file!

//Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = function (drivers) {
  const getNames = function (el,i,arr) {
    console.log(el.name);
  };
  return drivers.forEach(getNames);
}

//logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

const logDriversByHometown = function (drivers,location) {
  const getNamesForLocation = function (el,i,arr) {
    if (el.hometown === location) {
      console.log(el.name) ;
    }
  };
  return drivers.forEach(getNamesForLocation);
}

//driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

const driversByRevenue = function (drivers) {
  //let e = Array.from(drivers) ANOTHER WAY TO COPY AN ARRAY
  const revenueSorter = function (driver1,driver2) {
    return driver1.revenue - driver2.revenue;
  };
  return drivers.concat().sort(revenueSorter);
}

//driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

const driversByName = function (drivers){
  const comparator = function (a,b) {
    return a.name.localeCompare(b.name);
  };
  return drivers.concat().sort(comparator);
}

//totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const totalRevenue = function (drivers){
  const sumRevenue = function (agg,el,i,arr){
    total = agg.total + el.revenue
    return {
      total
    }
  };
  return drivers.reduce(sumRevenue,{total:0}).total;
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.

const averageRevenue = function(drivers){
  const average = function (agg,el,i,arr){
    //total = agg.total + el.revenue
    return {
      total: agg.total + el.revenue
    }
  };
  return drivers.reduce(average,{total:0,avg:0}).total/drivers.length;
}
