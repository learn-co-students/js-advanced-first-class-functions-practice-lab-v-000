const logDriverNames = function(drivers){
  const logNames = function(el, i, arr){
    console.log(el.name)
  }
  return drivers.forEach(logNames)
}

const logDriversByHometown = function(drivers, town){
  const logIfHomeTown = function(el, i, arr) {
    if(el.hometown === town){
      console.log(el.name)
    }
  }
  return drivers.forEach(logIfHomeTown)
}

const driversByRevenue = function(drivers){
  const revSorter = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  }
  const driversCopy = [...drivers]
  return driversCopy.sort(revSorter)
}

const driversByName = function(drivers){
  const alphabetize = function(a, b){
    aName = a.name
    bName = b.name
    return aName.localeCompare(bName)
  }
  const driversCopy = [...drivers]
  return driversCopy.sort(alphabetize)
}

const reduceRevenue = function(agg, el, i, arr){
  return agg + el.revenue
}

const totalRevenue = function(drivers){
  return drivers.reduce(reduceRevenue, 0)
}

const averageRevenue = function(drivers){
  total = totalRevenue(drivers)
  return total / drivers.length
}
