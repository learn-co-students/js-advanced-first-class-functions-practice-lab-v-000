// Code your solution in this file!

function logDriverNames(drivers) {
  for (const el of drivers) {
    console.log(el.name)
  }
}

function logDriversByHometown(drivers, town) {
  for (const el of drivers) {
    if(el.hometown === town) {
      console.log(el.name)
    }
  }
}

function driversByRevenue(drivers){
  let new_array = [...drivers]

  new_array.sort(function (a, b){
     return a.revenue - b.revenue
  })

  return new_array
}

function driversByName(drivers) {
  let new_array = [...drivers]

  new_array.sort(function (a, b){
     return a.name.localeCompare(b.name)
  })

  return new_array
}

function totalRevenue(drivers) {
  totalRev = 0

  for (const el of drivers) {
    totalRev += el.revenue
  }
  return totalRev
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
