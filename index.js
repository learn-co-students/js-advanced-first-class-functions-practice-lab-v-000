// Code your solution in this file!
const logDriverNames = function (drivers) {
	drivers.forEach(function(driver) {
		console.log(driver.name);
	})
}

const logDriversByHometown = function (drivers, town) {
	drivers.forEach(function(driver) {
		if ( driver.hometown === town ){
			 console.log(driver.name);	
		}		
	})
}

const revenueSorter = function(driver1, driver2) {
	return driver1.revenue - driver2.revenue;
}

const driversByRevenue = function(drivers) {
	return drivers.slice().sort(revenueSorter);
}

const sortByName = function (driver1, driver2) {
	return driver1.name.localeCompare(driver2.name)
}

const driversByName = function (drivers) {
	return drivers.slice().sort(sortByName);
}
const reduceProductPrices = function (agg, el, i, arr) {
   return agg + el.revenue;
};
 
const totalRevenue = function (drivers) {
	return drivers.reduce(reduceProductPrices,0);
}

const averageRevenue = function (drivers) {
	return totalRevenue(drivers) / drivers.length;
}