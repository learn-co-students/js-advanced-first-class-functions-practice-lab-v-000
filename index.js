// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  let driversCopy = drivers.slice(0);
  driversCopy.sort(function compare(a, b) {
    return a.revenue - b.revenue;
  });
  return driversCopy;
}

function driversByName(arr) {
  let driversCopy = arr.slice(0);
  driversCopy.sort(function compare(a,b) {
    return a.name.localeCompare(b.name);
  });
  return driversCopy;
}

function totalRevenue(arr) {
  let initialValue = 0;
  return arr.reduce(function(acc, cur, i, arr) {
    return acc + cur.revenue;
  },initialValue);
}

function averageRevenue(arr) {
  let initialValue = 0;
  const total = arr.reduce(function(acc, cur) {
    return acc + cur.revenue;
  },initialValue);
  return total / arr.length;
}