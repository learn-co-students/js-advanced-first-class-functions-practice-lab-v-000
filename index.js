// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  var arry = driver.filter(function(num){
    return num.hometown === location
  })
  arry.forEach(function(element){console.log(element.name)})

}
function driversByRevenue(driver){
  driver.sort(function(a,b){
    var revenueA = a.revenue
    var revenueB = b.revenue
    if (revenueA < revenueB){
      return -1;
    }
    else if (revenueA > revenueB){
      return 1
    }
    return 0
  })
}
function driversByName(driver){
  driver.sort(function(a,b){
    var revenueA = a.name.toUpperCase()
    var revenueB = b.name.toUpperCase()
    if (revenueA < revenueB){
      return -1;
    }
     if (revenueA > revenueB){
      return 1
    }
    return 0
  })
}
