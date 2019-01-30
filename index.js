// Code your solution in this file!
const logDriverNames = function (drivers) {
  let driverNames = []
   drivers.forEach(function (driver) {
     console.log(driver.name)
     driverNames.push(`${driver.name}`);
  });
  return driverNames
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(function (driver) {
    if (driver.hometown === town)
    console.log(driver.name)
  });
}
