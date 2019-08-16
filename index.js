// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.map(function(driverObj) {
    console.log(driverObj.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  for (driverObj of drivers) {
    if (driverObj.hometown === hometown) {
      console.log(driverObj.name)
    }
  }
}

function driversByRevenue(drivers) {
  const byRevenue = function (aDriverObj, bDriverObj) {
    return aDriverObj.revenue - bDriverObj.revenue
  }
  const driversCopy = [...drivers]
  return driversCopy.sort(byRevenue)
}

function driversByName(drivers) {
  const byName = function (aDriverObj, bDriverObj) {
    return aDriverObj.name.localeCompare(bDriverObj.name)
  }
  const driverCopy = [...drivers]
  return driverCopy.sort(byName)
}

function totalRevenue(drivers) {
  const toTotalRevenue = function (agg, el, i, arr) {
    return agg + el.revenue
  }

  return drivers.reduce(toTotalRevenue, 0)
}

function averageRevenue(drivers) {
  const allRevenues = drivers.map(function (driverObj) {
    return driverObj.revenue
  })
  console.log(allRevenues)

  const makeAverage = function(revenuesArr) {
    let i = 0
    let total = 0
    for (revenue of revenuesArr) {
      ++i
      total += revenue
    }
    return total / i
  }

  return makeAverage(allRevenues)
}
