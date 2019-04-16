const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
  console.log(driver.name)})
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name)
  })
}

const driversByRevenue = function(drivers) {
  const newArray = [...drivers].sort(function(driverA, driverB) {
   return driverA.revenue - driverB.revenue
 }
 )
 return newArray
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return (driverA.name.localeCompare(driverB.name))
  })
}

const totalRevenue = function (drivers) {
  const reduced = function (agg, el, i, arr) {
    return agg + el.revenue;
  };
  return drivers.reduce(reduced, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length
}
