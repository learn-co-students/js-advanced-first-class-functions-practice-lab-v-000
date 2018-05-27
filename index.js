// Code your solution in this file!

logDriverNames = (driver) => {
  driver.forEach(function(d) {
  console.log(d.name)
  })
}


logDriversByHometown = (drivers, location) => {

  drivers.forEach(function(d) {
    if(d.hometown === location) {
      console.log(d.name)
    }
  })
}

driversByRevenue = (drivers) => {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

driversByName = (drivers) => {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}


totalRevenue = (drivers) =>  {
  return drivers.reduce(function(total, d) {
    return d.revenue + total
  }, 0)

}

averageRevenue = (drivers) => {
  return totalRevenue(drivers)/drivers.length
}
