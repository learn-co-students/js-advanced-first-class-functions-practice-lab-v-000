// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers){
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, hometown){
  drivers.map(function (driver){
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (obj1, obj2){
    console.log("this is obj1:" + obj1.revenue, "this is obj2:" + obj2.revenue);
  	return obj1.revenue - obj2.revenue;
   });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (obj1, obj2){
    return obj1.name.localeCompare(obj2.name);
  });
}

function totalRevenue(drivers) {
  const reduceRevenue = function (agg, el, i, arr){
    return agg + el.revenue;
  }

  return drivers.reduce(reduceRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
