// Code your solution in this file!

function logDriverNames(drivers) {
  for (const el of drivers) {
    console.log(el.name)
  }
}

function logDriversByHometown(drivers, town) {
  for (const el of drivers) {
    if (el.hometown === town) {
      console.log(el.name)
    }
  }
}

function driversByRevenue(drivers){
  return drivers.slice().sort((driverOne, driverTwo) => {
    return driverOne.revenue - driverTwo.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort((driverOne, driverTwo) => {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(sum, current){
    return current.revenue + sum
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
