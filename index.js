// Code your solution in this file!

const stripDriver = function (el) {
  console.log(el.name);
};

const driverName = function (el) {
	return el.name;
}

const revenueSorterAsc = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};
 
const numberSorterDsc = function (driver1, driver2) {
  return driver2 - driver1;
};

const nameSorterAsc = function (a, b) {
  return (a.name).localeCompare(b.name, 'en', {sensitivity: 'base'});
};

const reduceRevenue = function (agg, el, i, arr) {
  return parseInt(agg) + parseInt(el.revenue);
};

function logDriverNames (arr) {
  for (const el of arr) {
    stripDriver(el);
  }
}

function logDriversByHometown (arr, loc) {
  for (const el of arr) {
    if (el.hometown === loc) {
			stripDriver(el);
		}
  }
}

function driversByRevenue(drivers) {
	newDrivers = drivers.slice(0);

	newDrivers.sort(revenueSorterAsc);
	return newDrivers;
}

function driversByName(drivers) {
	newDrivers = drivers.slice(0);

	newDrivers.sort(nameSorterAsc);
	return newDrivers;
}

function totalRevenue(drivers) {
	return drivers.reduce(reduceRevenue, 0);
};

function averageRevenue(drivers) {
	const totRev = totalRevenue(drivers);
	return (totRev / drivers.length);
}

