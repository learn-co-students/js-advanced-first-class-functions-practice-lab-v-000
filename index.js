// Code your solution in this file!

// const logDriverNames = function (drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });


const logDriverNames = function (arr) {
	arr.forEach(function (el) {
		console.log(el.name);
	});
}

const logDriversByHometown = function (arr, location) {
	arr.forEach(function (el) { 
		if (el.hometown == location) {
			console.log(el.name) 
		}
	});
};

const driversByRevenue = function (arr) {
	return arr.slice().sort(function (el1, el2) {
		return el1.revenue - el2.revenue;
	});
}

const driversByName = function (arr) {
	return arr.slice().sort(function (el1, el2) {
		return el1.name.localeCompare(el2.name);
	});
}

const totalRevenue = function (arr) {
	return arr.reduce(function (acc, cV) {
		console.log(acc)
		return acc + cV.revenue;
	}, 0);
}

const averageRevenue = function (arr) {
	return totalRevenue(arr) / arr.length;
}