// Code your solution in this file!
function logDriverNames (drivers) {
  const callback = function (el) {
    console.log(el.name);
  };
  drivers.forEach(callback);
}

function logDriversByHometown (drivers, location) {
  const callback = function (el) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  };
  drivers.forEach(callback);
}

function driversByRevenue (drivers) {
  const revenueSorter = function (objA, objB) {
    return objA.revenue - objB.revenue;
  };
  return drivers.slice().sort(revenueSorter);
}

function driversByName (drivers) {
  const nameSorter = function (objA, objB) {
    return (objA.name).localeCompare(objB.name);
  };
  return drivers.slice().sort(nameSorter);
}

function totalRevenue (drivers) {
  const reduceDriverRevenues = function (agg, el) {
    return agg + el.revenue;
  };
  return drivers.reduce(reduceDriverRevenues, 0);
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
