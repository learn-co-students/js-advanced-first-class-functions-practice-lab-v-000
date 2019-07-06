// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(user) {
    console.log(user.name)
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(user) {
    if (user.hometown === town) {
      console.log(user.name)
    }
  })
}

function driversByRevenue(drivers) {
  const newarr = drivers.slice()
  return newarr.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const newarr = drivers.slice()
  return newarr.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}



function totalRevenue(drivers) {
  let totRev = 0
  drivers.forEach(function(user) {
    totRev += user.revenue
  })
  return totRev
}



function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
