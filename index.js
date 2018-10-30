// Code your solution in this file!
function logDriverNames(drivers) {
  const logName = function(el, i, arr) {
    console.log(el.name);
  }

  drivers.forEach(logName);
}

function logDriversByHometown(drivers, hometown) {
  const logNameFilter = function(el, i, arr) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  }
  drivers.forEach(logNameFilter);
}

function driversByRevenue(drivers) {
  const driversCopy = drivers.slice();
   const sortRevenues = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  }
   return driversCopy.sort(sortRevenues);
}

 function driversByName(drivers) {
  const driversCopy = drivers.slice();
   const comparator = function(a, b) {
    return a['name'].localeCompare(b['name']);
  }
   return driversCopy.sort(comparator);
}

 function totalRevenue(drivers) {
  const reduceDriverRevenues = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
   return drivers.reduce(reduceDriverRevenues, 0);
}

 function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
