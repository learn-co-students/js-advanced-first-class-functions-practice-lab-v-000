// Code your solution in this file!
function logDriverNames(drivers) {
	drivers.forEach(function(driver){
		console.log(driver.name);
	})
}

function logDriversByHometown(drivers, town) {
	drivers.forEach(function(driver){
		if (driver.hometown === town)
			console.log(driver.name)
	})
}

function driversByRevenue(drivers){

	const driversSortedByRevenue = [...drivers]

	driversSortedByRevenue.sort(function(driver1, driver2){
		return driver1.revenue - driver2.revenue;
	})

	return driversSortedByRevenue;
}

function driversByName(drivers){

	const driversSortedByName = [...drivers];

	driversSortedByName.sort(function(driver1, driver2){
		return driver1.name.localeCompare(driver2.name);
	})

	return driversSortedByName;
}	

function totalRevenue(drivers) {

	const sumTotalRevenueForDrivers = [...drivers];
	let initialValue = 0;

	const sum = sumTotalRevenueForDrivers.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue.revenue;
	}, initialValue)

	return sum;

}

function averageRevenue(drivers) {

	const avgRevenueForDrivers = [...drivers];
	let initialValue = 0;

	const sum = avgRevenueForDrivers.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue.revenue;
	}, initialValue)

	return sum / avgRevenueForDrivers.length;

}