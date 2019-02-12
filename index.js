// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {console.log(driver.name)})
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown)
      console.log(driver.name)
  })
}

const driversByRevenue = function (drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function (a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = function (drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (agg, el, i, arr){
    return agg += el.revenue
  }, 0)
}

const averageRevenue = function (drivers) {
  return drivers.reduce(function (agg, el, i, arr){
    if (i === arr.length -1){
      return (agg+= el.revenue)/arr.length
    }else {
        return agg += el.revenue
      }
  }, 0)
}
