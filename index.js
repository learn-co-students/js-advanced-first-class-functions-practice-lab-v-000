// Code your solution in this file!

function callback(el) {
  console.log(el.name);
};

const logDriverNames = function(drivers){
  drivers.forEach( function (driver){
      callback(driver)
      //console.log(driver.name);
  })
};

const logDriversByHometown = function(drivers,hometown){
  drivers.forEach( function(driver){
    if (driver.hometown === hometown) {
      callback(driver)
      //console.log(driver.name);
    }
  })
};

const driversByRevenue = function(drivers) {
  drivers.sort(function (a, b) {
     a.localeCompare(b);
  });
};
// const driversByRevenue = function(drivers) {
//   drivers.sort(function (a, b) {
//      a.localeCompare(b);
//   });
// };
