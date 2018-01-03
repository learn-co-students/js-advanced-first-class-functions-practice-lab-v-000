// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(`${driver.name}`);
  }
}

function logDriversByHometown(drivers, hometown) {
  for (const driver of drivers) {
    if (driver.hometown === hometown) {
      console.log(`${driver.name}`);
    }
  }
}

function driversByRevenue(drivers) {
  let sortedRevenues = drivers.slice().sort(function(a,b){
    return a.revenue > b.revenue;
  });
  return sortedRevenues;
}

function driversByName(drivers) {
  let sortedNames = drivers.slice().sort(function(a,b){
    return a.name > b.name;
  });
  return sortedNames;
}

const revenues = function sumRevenue(agg, el){
  return agg + el.revenue;
}

function totalRevenue(drivers) {
  return drivers.reduce(revenues, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
