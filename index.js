// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function (el) {
    console.log(el.name)
  })
}

function logDriversByHometown(array, location) {
	return array.filter(function (el) {
		return el.hometown === location
    }).map(function(el) {
		    console.log(el.name)});
}

function driversByRevenue(array) {
  return array.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  })
}

function driversByName(array) {
  return array.slice().sort(function (driver1, driver2) {
    let driver1Name = driver1.name.toUpperCase();
    let driver2Name = driver2.name.toUpperCase();
    if (driver1Name < driver2Name) {
      return -1;
    }
    if (driver1Name > driver2Name) {
      return 1;
    }
    return 0;
  })
}

function totalRevenue(array) {
  return array.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0)
}

function averageRevenue(array) {
  return totalRevenue(array) / array.length;
}
