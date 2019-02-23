// Code your solution in this file!

const logDriverNames = function (array) {
  array.forEach( function(element) {
    console.log(element.name)
  });
};

const logDriversByHometown = function (array, hometown) {
  logDriverNames(array.filter( function (element) {
    return element.hometown === hometown;
  }))
}

const driversByRevenue = function (array) {
  return array.map( function (element) {
    return element
  }).sort( function (a, b) {
    return a.revenue - b.revenue;
  })
};

const driversByName = function (array) {
  return array.map( function (element) {
    return element;
  }).sort( function (a, b) {
    return a.name.localeCompare(b.name);
  })
};

const sumRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
};


const totalRevenue = function (array) {

  return array.reduce(function (agg, element) {
    return agg + element.revenue;
  }, 0)
};

const averageRevenue = function (array) {
  return totalRevenue(array) / array.length;
}
