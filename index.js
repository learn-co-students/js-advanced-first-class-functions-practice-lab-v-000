// Code your solution in this file!
const logDriverNames = function(arr) {
  arr.forEach(function(driver) {
    console.log(driver.name);
  });
  /*for(var i = 0; i < arr.length; i ++){
    console.log(arr[i].name)
  }*/
};

const logDriversByHometown = function(arr, location) {
  arr.forEach(function(driver) {
    if (driver.hometown == location) console.log(driver.name);
  });
};

const driversByRevenue = function(arr) {
  const tempArr = arr.slice();
  return tempArr.sort(function compare(a, b) {
    if (a.revenue < b.revenue) return -1;
    if (a.revenue > b.revenue) return 1;
    return 0;
  });
  console.log(arr);
  console.log(tempArr);
};

const driversByName = function(arr) {
  const tempArr = arr.slice();
  /*return tempArr.sort(function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });*/
  return tempArr.sort(function compare(a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(arr) {
  const totalRev = function(agg, cur) {
    console.log(agg);
    return agg + cur.revenue;
  };
  return arr.reduce(totalRev, 0);
};

const averageRevenue = function(arr) {
  return totalRevenue(arr) / arr.length;
};
