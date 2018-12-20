// function logDriverNames(drivers) {
// 	for (d of drivers) {
// 		console.log(d.name)
// 	}
// }

function logDriverNames(drivers) {
	drivers.forEach(function(d) {
		console.log(d.name);
	});
}


function logDriversByHometown(drivers, loc) {
	drivers.forEach(function(d) {
		if (d.hometown === loc) {
			console.log(d.name)
		}
	});
}

function driversByRevenue(drivers) {
	return drivers.slice().sort(function (a, b) {
		return a.revenue - b.revenue;
	});
}

function driversByName(drivers) {	
	return drivers.slice().sort(function (a, b) {
		return a.name.localeCompare(b.name);
	});
}

const totalRevenue = function(drivers) {
	return drivers.reduce(function(total, driver) {
		return total + driver.revenue
	}, 0)
}

const averageRevenue = function(drivers) {
	return totalRevenue(drivers)/drivers.length;
}

