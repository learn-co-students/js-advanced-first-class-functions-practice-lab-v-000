function logDriverNames(drivers) {
	for (const driver of drivers) {
		console.log(driver.name);
	}
}

function logDriversByHometown(drivers, location){
	console.log(logDriverNames(drivers.filter(driver => driver.hometown === location)));
}

function driversByRevenue(drivers) {
	let newDriversArray = [...drivers];
	 return newDriversArray.sort(function(a, b) {
  		return a.revenue - b.revenue;
	 	});
}

function driversByName(drivers) {
	return [...drivers].sort(function (a,b) {
		return a.name.localeCompare(b.name);
	});
}

function totalRevenue(drivers) {
	return drivers.reduce(function(a, b){return a + b.revenue;}, 0);
}

function averageRevenue(drivers) {
	return totalRevenue(drivers) / drivers.length;
}