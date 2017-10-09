// () — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
// () — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
// () — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
// () — Receives an array of driver objects and returns the average revenue earned by each driver.


function logDriverNames (drivers) {
	drivers.forEach((driver) => console.log(driver.name));
}

function logDriversByHometown (drivers, location) {
	drivers.forEach((driver) => {
		if (driver.hometown === location) {
			console.log(driver.name);
		}
	}); 
}

function driversByRevenue (drivers) {
	let sortedDrivers = drivers.slice();
	return sortedDrivers.sort((driver1, driver2) => {
		return driver1.revenue - driver2.revenue;
	});
}

function driversByName (drivers) {
	let sortedDrivers = drivers.slice();
	return sortedDrivers.sort((driver1, driver2) => driver1.name.localeCompare(driver2.name));
}

function totalRevenue (drivers) {
	return drivers.reduce((sum, driver) => sum + driver.revenue,0);
}

function averageRevenue (drivers) {
	return totalRevenue(drivers)/drivers.length;
}

