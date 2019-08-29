// Code your solution in this file!
const logDriverNames = function(drivers) {
	for (driver of drivers) {
		console.log(driver.name);
	}
	// drivers.forEach(function(driver, i, drivers) {
	// 	console.log(driver.name);
	// })
}

const logDriversByHometown = function(drivers, location) {
	drivers.forEach(function(driver, i, drivers) {
		if (driver.hometown === location) {
			console.log(driver.name);
		}
	})
}

const driversByRevenue = function(drivers) {
	return [...drivers].sort(function(a, b) {
		return (a['revenue']) - (b['revenue']);
	})
}

const driversByName = function(drivers) {
	return [...drivers].sort(function(a, b) {
		return (a['name']).localeCompare(b['name']);
	})
}

const totalRevenue = function(drivers) {
	return drivers.reduce(function(agg, el, i, arr){
		return agg + el.revenue;
	}, 0)
}

const averageRevenue = function(drivers) {
	return totalRevenue(drivers) / drivers.length;
}
