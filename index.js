// Code your solution in this file!
//logs the name of each driver
//logDriverNames() — Receives an array of driver objects
//and logs the name attribute of each driver to the console.
function logDriverNames(drivers){
  drivers.forEach(calback);
}

const calback=function (el,i,array){
  console.log(el.name);
};

//logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown
//matches the string passed in as the 'location' argument.
//logs the name of each driver whose hometown matches the
//passed-in argument

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
  if (driver.hometown===hometown){
  console.log(driver.name);
  }
  });
}

const driversByRevenue = function (drivers) {
  return  drivers.slice().sort(function (driver1,driver2){
  return driver1.revenue - driver2.revenue;
  });
};

const driversByName = function (drivers) {
  return  drivers.slice().sort(function (driver1,driver2){
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (totalRev, driver) {
    return totalRev + driver.revenue;
  }, 0);
};

const averageRevenue= function (drivers) {
  return (totalRevenue(drivers))/drivers.length;
};
