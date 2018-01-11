// Code your solution in this file!
function logDriverNames(drivers) {
	for (const driver of drivers) {
		console.log(driver.name)
	}
}

function logDriversByHometown(drivers, hometown) {
	return logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}

function driversByRevenue(drivers) {
	return drivers.slice(0).sort(function(a, b){
		return a.revenue - b.revenue
	});
}

function driversByName(drivers) {
	return drivers.slice(0).sort(function(a, b){
		return a.name.localeCompare(b.name)
	});
}

function totalRevenue(drivers) {
	return drivers.reduce(function(agg, driver){
		return agg += driver.revenue;
	}, 0);
}

function averageRevenue(drivers) {
	return totalRevenue(drivers) / drivers.length;
}