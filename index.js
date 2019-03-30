// Code your solution in this file!

const callback = function (el, i, arr) {
  console.log(el.name);
};

const callback2 = function (el, i, arr) {
  if (el.hometown === town) {
    console.log(el.name);
  }
};

function logDriverNames(drivers) {
  drivers.forEach(callback)
}

function logDriversByHometown(drivers, town) {
  const arrayLength = drivers.length;
    for (let i = 0; i < arrayLength; i++) {
      if (drivers[i].hometown === town) {
        console.log(drivers[i].name);
      }
    }
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  }
)}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name)
  }
)}


const revenueSum = function(agg, el, currentIndex, array) {
  return agg += el.revenue
}


function totalRevenue(drivers) {
  return drivers.reduce(revenueSum, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
