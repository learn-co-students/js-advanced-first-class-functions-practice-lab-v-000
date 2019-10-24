// Code your solution in this file!


function logDriverNames(drivers){
  drivers.forEach(callback)
}

const callback = function(el, i, arr){
  console.log(`${el.name}`)
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function(driver){
    if(driver.hometown === hometown){
      console.log(`${driver.name}`)
    }
  })
}

const numSorter= function(num1, num2){
  return num1.revenue - num2.revenue
}
function driversByRevenue(drivers){
  let newDrivers = drivers

  return newDrivers.sort(numSorter)
}

function driversByName(drivers){
  let newDrivers = drivers

  return newDrivers.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

const reducePrice = function(agg,el,i,arr){
  return agg + el.revenue
}

const totalRevenue= function(drivers){
  return drivers.reduce(reducePrice, 0)
}
const avgPrice = function(agg,el,i,arr){
  return (agg+el.revenue)/(i+1)
}
const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length

}
