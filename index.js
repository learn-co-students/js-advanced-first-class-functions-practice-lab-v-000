// Code your solution in this file!
    
function logDriverNames(drivers){
  drivers.forEach((driver)=> {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach((driver)=> {
    if (location === driver.hometown) {
    console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice(0).sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
    return drivers.slice(0).sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  const obj = drivers.reduce((a, b) => ({revenue: a.revenue + b.revenue}));
  return obj.revenue;
}

function averageRevenue(drivers) {
  const obj = drivers.reduce((a, b) => ({revenue: a.revenue + b.revenue}));
  return obj.revenue / drivers.length;
}