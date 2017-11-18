function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown){
      console.log(driver.name) };
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (drivers) { //if argument is passed in total drivers, it will enter this big function
  return drivers.reduce( //then, the argument is reduced to two arguments:
    function (total, currentDriver) { //total, and current driver, it's iterator
    return currentDriver.revenue + total; //add revenue to the total
  }, 0); //looks like drivers.reduce(function,0), so what's passed are the two aruments for the function,and starting at index 0 for drivers
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
