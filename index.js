// Code your solution in this file!
function logDriverNames(drivers) {
  for(const d of drivers) {
    console.log(d.name);
  }
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
   return drivers.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(sum, value){
    return sum + value.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
