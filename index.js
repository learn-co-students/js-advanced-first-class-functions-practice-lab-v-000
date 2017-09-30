// Code your solution in this file!
function logDriverNames(drivers) {
	drivers.forEach(function (element) {
		console.log(element.name)
	})
}


function logDriversByHometown(drivers, location) {
	drivers.forEach(function (element) {
		if (element.hometown === location) {
			console.log(element.name)
		}})
}

function driversByRevenue(drivers) {
	return drivers.slice().sort(function(element1, element2){
		return element1.revenue - element2.revenue
	}) 
}

function driversByName(drivers) {
	return drivers.slice().sort(function(element1, element2){
		return element1.name.localeCompare(element2.name)
	}) 
}

function totalRevenue(drivers) {
	return drivers.reduce(function(total, element) {
		return total + element.revenue
	}, 0)
}

function averageRevenue(drivers) {
	return totalRevenue(drivers)/drivers.length
}