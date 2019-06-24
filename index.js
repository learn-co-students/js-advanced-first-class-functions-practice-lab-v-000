function logDriverNames(drivers){
	drivers.forEach(function(element) {
  	console.log(element.name);
	});
}

function logDriversByHometown(drivers, location) {
	drivers.forEach(function(driver) {
		if (driver.hometown === location) {
			console.log(driver.name);
		}
	})
}

function driversByRevenue(drivers){
	let sortedDrivers = drivers.slice(0);
    
	const revenueSorter = function (d1, d2) {
  	return d1.revenue - d2.revenue;
	};

 	sortedDrivers.sort(revenueSorter);
 	return sortedDrivers;
}

function driversByName(drivers){
	let sortedDrivers = drivers.slice(0);

	const comparator = function (a, b) {
  	return a.name.localeCompare(b.name);
	};

	sortedDrivers.sort(comparator);
	return sortedDrivers;
}

function totalRevenue(drivers){
	return drivers.reduce((sum, d) => sum + d.revenue, 0);
}

function averageRevenue(drivers){
	let total = totalRevenue(drivers);
	let count = drivers.length;
	return total/count;
}
	











