// Code your solution in this file!
function logDriverNames(drivers) {
	for (var k in drivers) {
		console.log(drivers[k].name)
	}
}

// const logDriverNames = function (drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });
// };

function logDriversByHometown(drivers, location) {
	for (var k in drivers) {
		if (drivers[k].hometown === location) {
			console.log(drivers[k].name)
		}
	}
}

// const logDriversByHometown = function (drivers, hometown) {
//   drivers.forEach(function (driver) {
//     if (driver.hometown === hometown) {
//       console.log(driver.name);
//     }
//   });
// };

function driversByRevenue(drivers) {
	return drivers.slice().sort(function(a,b) {
		return a.revenue - b.revenue
	})
}

function driversByName(drivers) {
	return drivers.slice().sort(function(a,b) {
		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  	var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  	if (nameA < nameB) {
    	return -1;
  	}
  	if (nameA > nameB) {
    	return 1;
  	}

  	// names must be equal
  	return 0;
	})
}

// const driversByName = function (drivers) {
//   return drivers.slice().sort(function (driverOne, driverTwo) {
//     return driverOne.name.localeCompare(driverTwo.name);
//   });
// };

function totalRevenue(drivers) {
	// console.log(drivers)
	return drivers.reduce(function(total, a) {
		return( a.revenue + total)
	}, 0)
}

function averageRevenue(drivers) {
	// console.log(drivers)
	return totalRevenue(drivers)/drivers.length
}
