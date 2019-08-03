// Code your solution in this file!

const callback = function (el) {
  console.log(el.name);
};

function logDriverNames(drivers) {
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach( function (driver) {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  })
}

const revenueSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;
};


function driversByRevenue(drivers) {
  return drivers.slice().sort( function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort( function (driver1, driver2) {
    return  driver1.name.localeCompare(driver2.name);
  });
}

const sumRevenue = function (agg, el) {
  return agg + el.revenue;
};



function totalRevenue(drivers) {
  return drivers.reduce(sumRevenue, 0);
}

function averageRevenue(drivers) {
  return drivers.reduce(sumRevenue, 0) / drivers.length

}
