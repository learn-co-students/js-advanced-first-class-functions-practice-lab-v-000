// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (el) {
    console.log(el.name)
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function (el) {
    if (el.hometown == town) {
      console.log (el.name)
    }
  })
}

function driversByRevenue(drivers) {
let driverz = drivers.slice(0);

  return driverz.sort(function (num1, num2) {
  return num1.revenue - num2.revenue;
})
}

function driversByName(drivers) {
  let driverz = drivers.slice(0);

  return driverz.sort(function (a, b) {
  return a.name.localeCompare(b.name);
})
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el, i, arr) {
    return agg + el.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / (drivers.length)
}
