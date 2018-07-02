// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(calback);
}

const calback=function (el,i,array){
  console.log(el.name);
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.sort(function (driver) {
    if (driver.hometown===hometown){
      console.log(driver.name);
    }
  });
};

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
