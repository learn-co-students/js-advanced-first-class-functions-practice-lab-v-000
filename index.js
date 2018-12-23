// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(arr) {
    console.log(arr.name);
  });
}
  
function logDriversByHometown(array, town) {
  array.forEach(function(arr) {
    if (arr.hometown === town) {
      console.log(arr.name);
    }
  });
}

function driversByRevenue(driverArr) {
  let newArr = Object.create(driverArr);
  return newArr.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(driverArr) {
  let newDrivers = Object.create(driverArr);
  return newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(driverArr) {
  let newDrivers = Object.create(driverArr.map(function(driver){
  return driver.revenue}));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  return newDrivers.reduce(reducer);
}

function averageRevenue(driverArr) {
  return totalRevenue(driverArr) / driverArr.length;
}


