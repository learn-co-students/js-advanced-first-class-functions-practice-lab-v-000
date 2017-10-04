function logDriverNames(collection) {
	for(const driver of collection) {
		console.log(driver.name);
	}
}

function logDriversByHometown(collection, home) {
	const objArray = collection.filter(driver => driver.hometown === home);
	logDriverNames(objArray);
}

function driversByRevenue(collection) {
	return collection.slice().sort(function(driverOne, driverTwo) {
		return driverOne.revenue - driverTwo.revenue;
	});
}

function driversByName(collection) {
	return collection.slice().sort(function(driverOne, driverTwo) {
		return driverOne.name.localeCompare(driverTwo.name)
	})
}

function totalRevenue(collection) {
	return collection.reduce(function(total, driverObj) {
		return total + driverObj.revenue
	}, 0)
}

function averageRevenue(collection) {
	const total = totalRevenue(collection);
	return total/collection.length;
}