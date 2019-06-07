// Code your solution in this file!
const logDriverNames = function (drivers) {
return drivers.forEach(function (driver) {
  console.log(driver['name'])
});
}

const logDriversByHometown = function (drivers, location) {
    drivers.forEach(function (driver) {
        if (driver['hometown'] == location){
            console.log(driver['name']);
        }
    });
};

const driversByRevenue = function (drivers) {
  let newDrivers = [...drivers];
  newDrivers.sort(function(a,b){
    return a['revenue'] - b['revenue'];
    });
    return newDrivers;
};

const driversByName = function(drivers) {
  let newDrivers = [...drivers];
  newDrivers.sort(function(a,b){
    return a['name'].localeCompare(b['name']);
  });
  return newDrivers;
};

const totalRevenue = function(drivers) {
    let sum = 0;
    drivers.forEach(function (driver) {
      sum += driver['revenue'];
    });
    return sum;
};

function averageRevenue(drivers) {

 return totalRevenue(drivers)/ drivers.length;

 };
