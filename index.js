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

const driversByName
