// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(list, town) {
  const matches = list.filter(driver => driver.hometown === town)
  logDriverNames(matches)
}

function driversByRevenue(drivers) {
  const copy = [...drivers]
  copy.sort(function (d1, d2) {
    return d1.revenue - d2.revenue
  })
  return copy
}

function driversByName(drivers) {
  const copy = [...drivers]
  copy.sort(function (d1, d2) {
    return d1.name.localeCompare(d2.name)
  })
  return copy
}

function totalRevenue(drivers) {
  sum = drivers.reduce(function (total, current) {
    return total + current.revenue;
  }, 0)
  return sum
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/(drivers.length)
}
