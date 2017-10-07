// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.reduce(function (agg, el, i, arr) {
    console.log(el.name);
  });
}

function logDriversByHometown(drivers, place) {
  drivers.forEach(function (el, i, arr) {
    if (el.hometown === place) {
      console.log(el.name);
    };
  });
}

function driversByRevenue(drivers) {
  const safeDrivers = [...drivers];
  const newArray = safeDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  });
  return newArray;
}

function driversByName(drivers) {
  const safeDrivers = [...drivers];
  const newArray = safeDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
    return newArray;
}

function totalRevenue(drivers) {
  return drivers.reduce(revenueCallback, 0);
};

const revenueCallback = function(agg, el, i, arr) {
  return agg + el.revenue;
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
