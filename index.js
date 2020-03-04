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
  let copyArr = drivers.slice();
  return copyArr.reduce(addRevenue, 0);
}