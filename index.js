// Code your solution in this file!

const logDriverNames = function (drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, town){
  drivers.forEach(function(driver){
    if(driver.hometown === town){
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function (drivers){
  return drivers.slice().sort(function(driver1,driver2){
  return driver1.revenue - driver2.revenue;
  });
};


const driversByName = function (drivers){
  return drivers.slice().sort(function(driver1, driver2){
     return driver1.name.localeCompare(driver2.name, 'en', {sensitivity: 'base'});
   });
};

var initialValue = 0;

const totalRevenue = function (drivers){
  return drivers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.revenue;
  }, initialValue );
};

const averageRevenue = function(drivers){
    return totalRevenue(drivers)/drivers.length;
  };
