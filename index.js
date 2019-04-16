// Code your solution in this file!
function logDriverNames(obj){
  obj.forEach(function(el){
    console.log(el.name);
  });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function (el){
    if (el.hometown === location) {
      return console.log(el.name);     
    };
  });
}

function driversByRevenue(drivers){
  const newDrivers = drivers.slice();
  return newDrivers.sort(function (a, b){
    return a.revenue - b.revenue;
  }); 
}

function driversByName(drivers){
  const newDrivers = drivers.slice();
  return newDrivers.sort(function (a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function (accumulator, a){
    return accumulator + a.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
