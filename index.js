// Code your solution in this file!
const logDriverNames = function(drivers)  {
  drivers.forEach(function(driver) {
    console.log(driver.name)
})
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (hometown === driver.hometown){
    console.log(driver.name)}
})
}

const driversByRevenue = function (drivers) {
  newOrder = [...drivers]
  newOrder.sort(function (a, b) {
  return a.revenue - b.revenue;
});
  return newOrder;
}


const driversByName = function(drivers) {
  newOrder = [...drivers]
  newOrder.sort(function (a, b) {
  return a.name.localeCompare(b.name);
  });
  return newOrder;
  }


const totalRevenue = function (drivers) {
  const totalEarnings = 0;
  const cumTotal = drivers.reduce(function (acc, cv) {
    return acc + cv.revenue;
  }, 0);
  return cumTotal;
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
