// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name)
  })
}

const totalRevenue = function (drivers) {
  let grandTotal = 0
  drivers.forEach(function (driver) {
    grandTotal += driver.revenue
  })
  return grandTotal
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
