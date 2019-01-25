// Code your solution in this file!
const logDriverNames = function (array) {
  return array.forEach(function (el) {
    return console.log(el['name']);
  });
};

const logDriversByHometown = function (array, location) {
  const ar = array.filter(el => el['hometown'] === location);
  return logDriverNames(ar);
};

const driversByRevenue = function (array) {
  return array.slice().sort(function (a, b) {
    return a['revenue'] - b['revenue'];
  });
};

const driversByName = function (array) {
  return array.slice().sort(function (a, b) {
    return a['name'].localeCompare(b['name']);
  });
};

const totalRevenue = function (array) {
  return array.slice().reduce(function (agg, el, i, arr) {
    return agg + el['revenue'];
  }, 0);
}

const averageRevenue = function (array) {
  const sum = array.slice().reduce(function (agg, el, i, arr) {
    return agg + el['revenue'];
  }, 0);
  return sum / array.length;
}
