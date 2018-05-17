// Code your solution in this file!

const logDriverNames = function(drivers){
  return drivers.forEach(function(driver){console.log(driver["name"])});
}
const logDriversByHometown = function(drivers,hometown){
  return drivers.forEach(function(driver){if (driver["hometown"] === hometown){console.log(driver["name"])}})
}
const driversByRevenue = function(drivers){
  // debugger
  return drivers.slice().sort(function (a,b){
    return a["revenue"] - b["revenue"]
  })
}
const driversByName = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a["name"].localeCompare(b["name"])
  })
}
const totalRevenue = function(drivers){
   return drivers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue["revenue"]},0)
}
const averageRevenue = function(drivers){
  totalR = totalRevenue(drivers)
  return totalR / drivers.length
}
