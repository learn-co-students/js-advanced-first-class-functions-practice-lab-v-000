// Code your solution in this file//

const logDriverNames = function (drivers) {
  let cb = function (element) {
    console.log(element.name)
  }

  drivers.forEach(cb);
}

const logDriversByHometown = function (drivers, hometown) {
  let cb = function (element) {
    if (hometown === element.hometown) {
      console.log(element.name)
    }
  }
  drivers.forEach(cb);
}

const driversByRevenue = function (drivers) {
  let newArray = [...drivers];
  let cb = function (a, b) {
    return a.revenue - b.revenue;
  };
  return newArray.sort(cb);
}

const driversByName = function (drivers) {
  let newArray = [...drivers];
  let cb = function (a, b) {
    return a.name.localeCompare(b.name);
  };
  return newArray.sort(cb);
}

const totalRevenue = function (drivers) {
  let cb = function (agg, el, i , arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(cb, 0);
}

const averageRevenue = function (drivers) {
  let cb = function (agg, el, i, arr) {
    return agg + el.revenue / drivers.length;
  }
  return drivers.reduce(cb, 0);
}
