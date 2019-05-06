// Code your solution in this file!
function logDriverNames(drivers){
  for(i = 0; i < drivers.length; i++){
    console.log(drivers[i].name)
  }
}

function logDriversByHometown(drivers, location){
  drivers.filter(driver => driver.hometown === location).forEach(function(element) {
  console.log(element.name);
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, element){
    return  total + element.revenue
  },0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}

