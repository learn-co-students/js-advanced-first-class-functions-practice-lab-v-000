// Code your solution in this file!
const callback = function (el, i, arr) {
  console.log(el.name);
}

function logDriverNames(drivers) {
  drivers.forEach(callback);
}

const htownCallback = function (el, i, arr) {

}

function logDriversByHometown(drivers, location) {
  let matches = [];
  drivers.forEach(function (driver){
    if (driver.hometown === location) {
      matches.push(driver);
    }
  })
  matches.forEach(callback);
}

function driversByRevenue(drivers) {
  let sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a, b) {return a.revenue - b.revenue});
};

const comparator = function (a, b) {
  return a.localeCompare(b);
};

function driversByName(drivers) {
  let sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a, b) {return a.name.localeCompare(b.name)});
};

function rev(driver){
  return driver.revenue;
};

function sum(prev, next){
  return prev + next;
};

function totalRevenue (drivers) {
  return drivers.map(rev).reduce(sum);
};

function averageRevenue(drivers) {
  let sums = totalRevenue(drivers);
  return sums / drivers.length;
};
