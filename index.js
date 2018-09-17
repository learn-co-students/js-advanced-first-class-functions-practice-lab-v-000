// Code your solution in this file!
const log = function (el) {
  console.log(el.name);
};

function logDriverNames(driver) {
  return driver.forEach(log);
};

function logDriversByHometown(driver, hometown) {
  return driver.filter(target => target.hometown === hometown).forEach(log);
};

function driversByRevenue(driver) {
  const driversCopy = [...driver];
  const numberSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };
  return driversCopy.sort(numberSorter);
};

function driversByName(driver) {
  const driversCopy = [...driver];
  const comparator = function (a, b) {
    return a.name.localeCompare(b.name);
  };
  return driversCopy.sort(comparator);
}

function totalRevenue(driver) {
  const reduceRevenue = function (agg, el) {
    return agg + el.revenue;
  };
  return driver.reduce(reduceRevenue, 0);
}

function averageRevenue(driver) {
  return totalRevenue(driver) / driver.length;
}
