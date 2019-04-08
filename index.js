// Code your solution in this file!
function logDriverNames(drivers)
{
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}
function logDriversByHometown(drivers, location)
{
  drivers.forEach(function(driver)
  {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  });
}
function driversByRevenue(drivers)
{
  const revenueSorter = function compareRevenu(driver1, driver2)
  {
    return driver1.revenue - driver2.revenue;
  };
  let driversCopy = [...drivers];
  const sortedDrivers = driversCopy.sort(revenueSorter);
  return sortedDrivers;
}
function driversByName(drivers)
{
  const nameSorter = function(driver1, driver2)
  {
    return driver1.name.localeCompare(driver2.name);
  };

  let driversCopy = [...drivers];
  const sortedDrivers = driversCopy.sort(nameSorter);
  return sortedDrivers;
}
function totalRevenue(drivers)
{
  const reduceRevenues = function (sum, driver, index, drivers)
  {
    return sum + driver.revenue;
  };
  return drivers.reduce(reduceRevenues, 0);
}
function averageRevenue(drivers)
{
  return totalRevenue(drivers)/drivers.length;
}
