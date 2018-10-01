const logDriverNames = function (array){
  array.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (array, loc){
  array.forEach(function (driver) {
    if (driver.hometown === loc){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(array){
  let newArray = array.slice();
  newArray.sort(function (a,b){
    return a.revenue - b.revenue;
  });
  return newArray;
};

const driversByName = function(array){
  let newArray = array.slice();
  newArray.sort(function (a,b){
    return a.name.localeCompare(b.name);
  });
  return newArray;
};

const totalRevenue = function(array){
  return array.reduce(function (accumulator, driver){
    return  accumulator + driver.revenue;
  }, 0);
};

const averageRevenue = function(array){
  total = array.reduce(function (accumulator, driver){
    return  accumulator + driver.revenue;
  }, 0);    
  return total / array.length;
};