function logDriverNames (drivers) {
  drivers.forEach((driver) => {
    console.log(driver.name)
  })
}

function logDriversByHometown (drivers, hometown) {
  drivers.forEach((driver) => {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
  let sortedByRevenue = drivers.sort((dr1, dr2) => {
    return dr1.revenue - dr2.revenue
  })
  return sortedByRevenue
}

function driversByName (drivers) {
  let sortedByName = drivers.sort((dr1, dr2) => {
    return dr1.name.localeCompare(dr2.name)
  })
  return sortedByName
}

function totalRevenue (drivers) {
  return drivers.reduce(function (earnedRevenue, currentDriver) {
    return earnedRevenue + currentDriver.revenue
  }, 0)
}

function averageRevenue (drivers) {
  return totalRevenue (drivers) / drivers.length
}
