// Code your solution in this file!

const logDriverNames = function (drivers) {
	drivers.forEach(callName);
}

const callName = function (el, i, array) {
	console.log(el.name);
}

const logDriversByHometown = function (drivers, hometown) { 
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
    	console.log(driver.name);
	}
  });
};

const driversByRevenue =  function (drivers) {
	const newDrivers = drivers.slice()
	return newDrivers.sort(revenueSorter);
}

const revenueSorter = function (driver1, driver2) {
  	return (driver1.revenue - driver2.revenue);
};

const driversByName = function (drivers) {
	const newDrivers = drivers.slice()
	return newDrivers.sort(nameSorter);
}

const nameSorter = function (driver1, driver2) {
	const name1 = driver1.name
	const name2 = driver2.name
  	return name1.localeCompare(name2);
};

const totalRevenue = function (drivers) {
	return drivers.reduce(reduceDriverRevenue, 0);
}

const reduceDriverRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
};

//const totalRevenue = function (drivers) {
  //return drivers.reduce(function (total, currentDriver) {
    //return currentDriver.revenue + total;
  //}, 0);
//};


const averageRevenue = function (drivers) {
	return totalRevenue(drivers) / drivers.length;
}


