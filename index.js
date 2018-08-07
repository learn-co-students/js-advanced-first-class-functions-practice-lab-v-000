// Code your solution in this file!
function logDriverNames(drivers){
	drivers.forEach(function(el){
		console.log(el.name);
	})
}

function logDriversByHometown(drivers, hometown){
	drivers.forEach(function(el){
		if (el.hometown === hometown){
			console.log(el.name)
		}
	})
}

function driversByRevenue(drivers){
	const arr = [...drivers];
	return arr.sort(function(a,b){
		return (a.revenue - b.revenue);
	});
}

function driversByName(drivers){
	const arr = [...drivers];
	return arr.sort(function(a,b){
		return a.name.localeCompare(b.name);
	});
}

function totalRevenue(drivers){
	
	return drivers.reduce(function(a,b){
		return a+b.revenue
	}, 0);

}

function averageRevenue(drivers){
	
	const total = drivers.reduce(function(a,b,i){
		return a+b.revenue
	}, 0);

	return total/drivers.length;

}