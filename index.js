// Code your solution in this file!
const elementName = function (obj) {
  console.log(obj.name);
};

function logDriverNames(arr) { arr.forEach(elementName); }

function logDriversByHometown(arr, location) {
  arr.forEach(function (element) {
    if (element.hometown === location) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(arr) {
  return arr.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(arr) {
  return arr.slice().sort(function (driver1, driver2) {
    return (driver1.name).localeCompare(driver2.name);
  });
}

const revenueTotal = function (agg, element) {
  return agg += element.revenue;
};

function totalRevenue(arr) {
  return arr.reduce(revenueTotal, 0);
}

function averageRevenue(arr) {
  return totalRevenue(arr) / (arr.length);
}
