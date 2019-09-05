// Code your solution in this file!
function logDriverName(driver){
	console.log(driver.name);
}

function logDriverNames(drivers){
	drivers.forEach(logDriverName);
};

function logDriversByHometown(drivers, location){
	let matchingDrivers = [];
	for (let driver of drivers){
		if (driver.hometown === location){
			matchingDrivers.push(driver);
		};
	};
	logDriverNames(matchingDrivers);
};

function driversByRevenue(drivers){
	return drivers.slice().sort(function(a, b){return a.revenue-b.revenue});
};

function driversByName(drivers){
	return drivers.slice().sort(function (a, b) {
	  return a.name.localeCompare(b.name);
	});
};

function totalRevenue(drivers){
	const allRevenues = drivers.map(function(driver){ return driver.revenue })
	return allRevenues.reduce((acc, val) => acc + val);
}

function averageRevenue(drivers){
	return totalRevenue(drivers)/drivers.length
}

