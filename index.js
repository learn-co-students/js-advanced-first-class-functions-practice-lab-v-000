// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, town){
  drivers.forEach(function(driver){
    if (driver.hometown === town){console.log(driver.name)};
  });
}



function driversByRevenue(drivers){

  return drivers.slice().sort(function (a, b){
    return a.revenue - b.revenue
  });

}
driversByRevenue([
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ]);
function driversByName(drivers){
  return drivers.slice().sort(function (a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  let totalRevenue = 0;
const total = function (agg, el, i, arr){
  return totalRevenue += el.revenue;
};
  return drivers.reduce(total, []);
};




function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
