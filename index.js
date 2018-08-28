// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
 let d = drivers.filter(function(driver) {return driver.hometown === location})
  d.forEach(function (a) {
    console.log(a.name)
  })
}

function driversByRevenue(drivers) {
	const revDrivers = [...drivers]
  revDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
  return revDrivers
}

function driversByName(drivers) {
  const nameDrivers = [...drivers]
  nameDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
  return nameDrivers
}

function totalRevenue(drivers) {
  const totalRevDrivers = [...drivers]
  let total = 0
    totalRevDrivers.forEach(function (driver) {
  	total += driver.revenue;
  	});
  	return total;
}

function averageRevenue(drivers) {
  const avgRevDrivers = [...drivers]
  let avg = 0
  let total = 0
    avgRevDrivers.forEach(function (driver) {
  	total += driver.revenue;
  	avg = total/drivers.length
  	});
  	return avg;
}




