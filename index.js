// Code your solution in this file!
const logDriverNames = function names(drivers) {
  drivers.forEach(function(driver)
  {console.log(driver.name)});
};

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
  if (driver.hometown === hometown){
  console.log(driver.name);
  }
 })
}


const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};

function driversByRevenue(drivers) {
  let driversRevenue = []

  driversRevenue = drivers.slice()

    return driversRevenue.sort(revenueSorter);
    };


const abcNames = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
};

function driversByName(drivers) {
   let names = []
   names = drivers.slice()

   return names.sort(abcNames);
};

function totalRevenue(drivers) {
  let totalrevenue = 0;
  drivers.forEach(function (driver) {
    totalrevenue += driver.revenue;
  });
  return totalrevenue;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
