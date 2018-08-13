// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(el) {
    console.log(el['name']);
  });
};

function logDriversByHometown(arr, hometown) {
  arr.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    };
  });
};

function driversByRevenue(arr) {
  const newArr = [];
  arr.forEach(function(driver) {
    newArr.push(driver);
  });
  newArr.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newArr;
};

function driversByName(arr) {
  const newArr = [];
  arr.forEach(function(driver) {
    newArr.push(driver);
  });
  newArr.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
  return newArr;
};

function totalRevenue(arr) {
  let totalRevenue = 0;
  arr.forEach(function(driver) {
    totalRevenue += driver.revenue;
  });
  return totalRevenue;
};

function averageRevenue(arr) {
  let totalRevenue = 0;
  arr.forEach(function(driver) {
    totalRevenue += driver.revenue;
  });
  const averageRevenue = totalRevenue / arr.length;
  return averageRevenue;
};
