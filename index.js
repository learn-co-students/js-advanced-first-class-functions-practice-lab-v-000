function logDriverNames(drivers) {
	drivers.forEach(function (driver) {
		console.log(driver.name)
	});
}

function logDriversByHometown(drivers, location) {
	drivers.forEach(function (driver) {
		if (location === driver.hometown){
			console.log(driver.name)
		} else {
			return `Sorry, this is not anyones location`
		}
	});
}

function driversByRevenue(drivers) {
	return drivers.slice().sort(function (a, b) {
		return a.revenue - b.revenue;
	});
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (agg, el) {
    return agg + el.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}