// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(driver){console.log(driver.name)})	
}

function logDriversByHometown(drivers,hometown){
	drivers.forEach(function(driver){
		if (driver.hometown === hometown){
			console.log(driver.name)
		}
	})
}

function driversByRevenue(drivers){
	let newarray = []
	newarray = drivers.slice()
	
	return newarray.sort(function (a,b){return a.revenue - b.revenue})
}

function driversByName(drivers){
	let newarray = []
	newarray = drivers.slice()
	
	return newarray.sort(function (a,b){return a.name.localeCompare(b.name)})
}

const reduceRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
};

function totalRevenue(drivers){
	return drivers.reduce(reduceRevenue,0)
}

function averageRevenue(drivers){
	return totalRevenue(drivers) / drivers.length
}