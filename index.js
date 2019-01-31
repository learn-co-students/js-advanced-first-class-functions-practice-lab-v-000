function logDriverNames(drivers){
	drivers.forEach(function(driver){
		console.log(driver.name);
	})
};

function logDriversByHometown(drivers, hometownToMatch){
	drivers.forEach(function(driver) {
		if (driver.hometown === hometownToMatch){
			console.log(driver.name);
		}
	})
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
};

function driversByRevenue(driversArray) {
	const newArray = driversArray.sort(revenueCompare);
	return newArray;
};

function revenueCompare(a, b) {
  const revenueA = a.revenue;
  const revenueB = b.revenue;

  let comparison = 0;
  if (revenueA > revenueB) {
    comparison = 1;
  } else if (revenueA < revenueB) {
    comparison = -1;
  }
  return comparison;
}

const totalRevenue = (driversArray) => {
 	let initialValue = 0;
 	let sum = driversArray.reduce(function (accumulator, currentValue) {
 	    return accumulator + currentValue.revenue;
 	},initialValue)
 	return sum;
 };

function averageRevenue(driversArray) {
	let revenueAverage = totalRevenue(driversArray)/driversArray.length
	return revenueAverage;
};
