// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(driver_name){
    console.log(driver_name.name);
  })
}

function logDriversByHometown(array, location){
  array.forEach(function(driver){
    if (driver.hometown == location){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(array){
  return array.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })

}

function driversByName(array){
  return array.slice().sort(function(a,b){
    return a['name'].localeCompare(b['name']);
  })
}

function totalRevenue(array){
  return array.reduce(function(accumulator, currentValue) {
    return ( accumulator + currentValue.revenue)
}, 0);
}


function averageRevenue(array){
  averageRev =  array.reduce(function(accumulator, currentValue) {
    return ( accumulator + currentValue.revenue)
  }, 0);
   return averageRev/array.length
}
