logName = function (el) {
  console.log(el.name);
};

function logDriverNames(drivers) {
  drivers.forEach(logName);
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(e => {
    if (e.hometown === location) {
      logName(e);
    }
  });
}

function driversByRevenue(drivers) {
  let copyArr = drivers.slice();
  copyArr.sort((a, b) => (a.revenue > b.revenue) ? 1 : -1);
  return copyArr;
}

function driversByName(drivers) {
  let copyArr = drivers.slice();
  copyArr.sort((a, b) => (a.name > b.name) ? 1 : -1);
  return copyArr;
}

const addRevenue = function (agg, el) {
  return agg + el.revenue;
};

function totalRevenue(drivers) {
  return drivers.reduce(addRevenue, 0);
}

const average = function (agg, el, i, arr) {
  agg += el.revenue;
  if (i === arr.length-1) {
    return agg/arr.length;
  } else {
    return agg;
  }
}

function averageRevenue(drivers) {
  return drivers.reduce(average, 0);
}