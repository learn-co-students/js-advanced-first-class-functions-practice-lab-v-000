// Code your solution in this file!
function logDriverNames (driver) {
  driver.forEach(function (x) {
    console.log(x.name);
  })
}

function logDriversByHometown (driver, location) {
  return driver.filter(function (x) {
    return x.hometown === location
  }).map(function (x) {
      console.log(x.name)
    });
}

function driversByRevenue (driver) {
  return driver.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  })
}

function driversByName (driver) {
  return driver.slice().sort(function (a, b) {
    let a_name = a.name.toLowerCase();
    let b_name = b.name.toLowerCase();
    if (a_name < b_name) {
      return -1;
    }
    if (a_name > b_name) {
      return 1;
    }
    return 0;
  })
}

function totalRevenue (driver) {
  return driver.reduce(function(total, name) {
    return total + name.revenue;}, 0)
}

function averageRevenue(driver) {
  return totalRevenue(driver) / driver.length;
}
