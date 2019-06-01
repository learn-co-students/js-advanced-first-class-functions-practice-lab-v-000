function logDriverNames(arr) {
	arr.forEach(function(element) {
		console.log(element.name);
	})
}

function logDriversByHometown(arr, location) {
	arr.forEach(function(driver) {
		if (driver.hometown === location) {
			console.log(driver.name);
		}
	})
}

const driversByRevenue = function(arr) {return arr.slice().sort(function(a, b) { return a.revenue - b.revenue})}

const driversByName = function(arr) {return arr.slice().sort(function(a, b) { return a.name.localeCompare(b.name)})}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (a, b) {
    return b.revenue + a;
  }, 0);
};

const averageRevenue = function(drivers) {
	return totalRevenue(drivers) / drivers.length;
}




