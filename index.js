// Code your solution in this file!
const logDriverNames = function (array) {
	for (const element of array) {
		console.log(element.name);
	};
};

const logDriversByHometown = function (array, city) {
	for (const element of array) {
		if (element.hometown === city) console.log(element.name);
	};
};

const driversByRevenue = function (array) {
	return array.slice().sort(function (a, b) {
		return a.revenue - b.revenue
	});
};

const driversByName = function (array) {
	return array.slice().sort(function (a, b) {
		return a.name.localeCompare(b.name)
	});
};

const totalRevenue = function (array) {
	const reduceRevenue = function (agg, element) {
		return agg + element.revenue
	}
	return array.reduce(reduceRevenue, 0)
}

const averageRevenue = function (array) {
	const averageRevenue = function (agg, element) {
		return agg + element.revenue / array.length
	}
	return array.reduce(averageRevenue, 0)
}