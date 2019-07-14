// Code your solution in this file!

function callback(el) {
  console.log(el.name);
};

const logDriverNames = function(drivers){
  drivers.forEach( function (driver){
      callback(driver)
      //console.log(driver.name);
  })
};

const logDriversByHometown = function(drivers,hometown){
  drivers.forEach( function(driver){
    if (driver.hometown === hometown) {
      callback(driver)
      //console.log(driver.name);
    }
  })
};

// const driversByRevenue = function(drivers) {
//   return drivers.sort(function (a, b) {
//      return a.revenue - b.revenue;
//   });
// };

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function (a, b) {
     return a.revenue - b.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function (a, b) {
    // console.log(a)
    // console.log(b)
    let aVar = a.name
    let bVar = b.name
     return aVar.localeCompare(bVar);
  });
};


const totalRevenue = function(drivers) {
return drivers.reduce((total, currentDriver) =>
    {
      // console.log("This is total")
      // console.log(total)
      // console.log("This is currentDriver")
      // console.log(currentDriver)
      return total + currentDriver.revenue },0);
};

const averageRevenue = function(drivers) {
  let numberOfDrivers = drivers.length;
  let result = totalRevenue(drivers)/  numberOfDrivers;
  console.log(totalRevenue(drivers))
  return result;
};
