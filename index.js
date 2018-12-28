//Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {console.log(driver.name)})
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  let driversCopy = [...drivers];
  return driversCopy.sort((a, b) => {
    return a.revenue - b.revenue; 
  });
}

function driversByName(drivers) {
  let driversCopy = [...drivers];
  return driversCopy.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}


const totalRevenue = function(drivers) {
 return drivers.reduce(function (total, driver) {
   return total + driver.revenue
 }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
