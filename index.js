// Code your solution in this file!


function logDriverNames(drivers) {
	drivers.forEach(function(driver) {
		console.log(driver.name)
	});
	//drivers.forEach(driver => console.log(driver.name))
};


function logDriversByHometown(drivers, location) {
	drivers.forEach(function(element) {
		if (element.hometown === location) {
			console.log(element.name)
		}
	});
  //drivers.forEach(element => { if (element.hometown === location) {console.log(element.name)}} );
};


function driversByRevenue(drivers) {
  let arrayOfDrivers = Array.from(drivers);
  return arrayOfDrivers.sort(function (a, b) {return a.revenue - b.revenue; });
};
  //return drivers.slice().sort( (a, b) => {return a.revenue - b.revenue} )


function driversByName(drivers) {
	return drivers.slice().sort( (a, b) => {return a.name.localeCompare(b.name)} )
};


function totalRevenue(drivers) {
	return drivers.reduce((total, driver) => {return total + driver.revenue}, 0)
};


function averageRevenue(drivers) {
	return totalRevenue(drivers) / drivers.length
}