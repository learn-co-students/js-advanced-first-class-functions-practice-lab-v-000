// Code your solution in this file!


function logDriverNames(drivers){
  drivers.forEach(function(element, index, array){
    console.log(element.name)
  })
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function(element, index, array){
    if(element.hometown === hometown){
      console.log(element.name)
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue
  })
}


function driversByName(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, element, index, array){
    return total + element.revenue
  }, 0)
}

function averageRevenue(drivers){
  total = drivers.reduce(function(total, element, index, array){
    return total + element.revenue
  }, 0)
  return total / drivers.length
}