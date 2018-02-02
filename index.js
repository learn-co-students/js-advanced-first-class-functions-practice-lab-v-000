const logDriverNames = function (drivers) {
  return drivers.forEach(function (el) {
    console.log(el['name'])
  })
}

const logDriversByHometown = function (drivers, location) {
  return drivers.forEach(function (el) {
    el['hometown'] === location ? console.log(el['name']) : false
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a['revenue'] > b['revenue']
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a['name'].localeCompare(b['name'])
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, el) {
    return total += el['revenue']
  }, 0)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
