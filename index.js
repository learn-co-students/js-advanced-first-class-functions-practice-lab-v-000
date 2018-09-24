// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function cb (el, i, array) {
    console.log(el.name);
  })
}

function logDriversByHometown(array, location) {
  array.forEach(function cb (el, i, array) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  })
}

function driversByRevenue(array) {
  return array.slice().sort(function cb (a, b) {
    if (a.revenue < b.revenue)
      return -1;
    if (a.revenue > b.revenue)
      return 1;
    else
      return 0;
  })
}

function driversByName(array) {
  return array.slice().sort(function cb (a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(array) {
  return array.reduce(function cb(agg, el, i, arr){
    return agg + el.revenue;
  }, 0)
}

function averageRevenue(array) {
  return array.reduce(function cb(agg, el, i, arr){
    return (agg + el.revenue)
  }, 0)/(array.length);
}