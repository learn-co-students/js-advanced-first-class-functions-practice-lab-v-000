// Code your solution in this file!
function logDriverNames (array) {
  const callback = function (el, i, arr) {
    console.log(el.name);
  };

  array.forEach(callback);
}

function logDriversByHometown (array, location) {
  const callback = function (el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  };

  array.forEach(callback);
}

function driversByRevenue (array) {
  const revenueSorter = function (a, b) {
    return a.revenue - b.revenue;
  };

  return array.slice(0).sort(revenueSorter);
}

function driversByName (array) {
  const nameSorter = function (a, b) {
    return a.name.localeCompare(b.name);
  };

  return array.slice(0).sort(nameSorter);
}

function totalRevenue (array) {
  const reduceRevenue = function (agg, el, i, arr) {
    return agg += el.revenue;
  };

  return array.reduce(reduceRevenue, 0);
}

function averageRevenue (array) {
  return totalRevenue(array) / array.length;
}
