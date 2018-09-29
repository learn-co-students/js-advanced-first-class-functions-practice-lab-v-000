function logDriverNames(array) {
	array.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(array, location) {
	array.forEach(driver => {
		if (driver.hometown === location) {
			console.log(driver.name);
		}
	});
}

function driversByRevenue(array) {
	return [...array].sort((a, b) => a.revenue - b.revenue);
}

function driversByName(array) {
	return [...array].sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(array) {
	return array.reduce((total, driver) => total + driver.revenue, 0);
}

function averageRevenue(array) {
	const sum = array.reduce((total, driver) => total + driver.revenue, 0);
	return sum / array.length;
}