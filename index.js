// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (array, hometown) {
  array.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function (array) {
  return array.slice().sort(function (a,b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (array) {
  return array.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (array) {
  return array.reduce(function (total, driver) {
    return driver.revenue + total;
  },0);
};

const averageRevenue = function (array) {
  return totalRevenue(array) / array.length;
};
