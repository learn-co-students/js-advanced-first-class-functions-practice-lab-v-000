let logDriverNames = (drivers) => {
  return drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

let logDriversByHometown = (drivers, location) => {
  return drivers.forEach(function (driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

let driversByRevenue = (drivers) => {
  let copyOfDrivers = [...drivers]
  return copyOfDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

const driversByName = (drivers) => {
  let copyOfDrivers = [...drivers]
  return copyOfDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = (drivers) => {
  return drivers.reduce(cbRevenue, 0)
}

function cbRevenue(agg, el, i, array) {
  return agg + el.revenue;
  }


let averageRevenue= (drivers) => {
  return totalRevenue(drivers)/drivers.length;
}
