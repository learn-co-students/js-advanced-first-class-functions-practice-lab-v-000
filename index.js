function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach((driver) => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce((i, driver) => {
    return driver.revenue + i
  }, 0)
}

function averageRevenue(drivers) {
  const total = totalRevenue(drivers)
  return total / drivers.length
}
