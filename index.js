// Code your solution in this file!
const logDriverNames = function (arr){
  arr.forEach(function (driver) {
    console.log(driver.name);
  })
}


const logDriversByHometown = function (arr, location){
    arr.forEach(function (driver){
      if (driver.hometown === location){
        console.log(driver.name);
    };
  });
};

const driversByRevenue = function (arr, revenue){
  const arrCopy = arr.slice()
  return arrCopy.sort(function (driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
};


const driversByName = function (arr) {
  const arrCopy = arr.slice()
  return arrCopy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (arr) {
  let revSum = 0
  arr.forEach(function (driver) {
    revSum += driver.revenue
  })
  return revSum
}

const averageRevenue = function (arr) {
  return totalRevenue(arr) / arr.length
}
