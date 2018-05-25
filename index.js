// Code your solution in this file!
const logDriverNames = function (drivers) {
	drivers.forEach(function (driver) {
		console.log(driver.name);
	});
}
 
const logDriversByHometown = function (drivers, location) {
	drivers.forEach(function (driver) {
		if (driver.hometown === location) {
			console.log(driver.name);
		};
	});
}

const driversByRevenue = function (drivers) {
	const sortByRevenue = function (a,b) {
		return a.revenue - b.revenue;
	}
	return drivers.slice().sort(sortByRevenue);
}

const driversByName = function (drivers) {
	const sortByName = function (a,b) {
		return a.name.localeCompare(b.name);
	}
	return drivers.slice().sort(sortByName);
}

const totalRevenue = function (drivers) {
	let totalRev = function (agg, el, i, arr) {
		return agg + el.revenue;
	} 
	return drivers.reduce(totalRev, 0);
}

const averageRevenue = function (drivers) {
	return (totalRevenue(drivers) / drivers.length);
}