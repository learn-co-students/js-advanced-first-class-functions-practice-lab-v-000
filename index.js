// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(element) {
    console.log(element.name);
  });
}


function logDriversByHometown(arr, hometown) {
  arr.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(arr) {
  return arr.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

function driversByName(arr) {
  return arr.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(arr) {
  return arr.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0);
};

function averageRevenue(arr) {
  return totalRevenue(arr) / arr.length;
};
