// Code your solution in this file!
function logDriverNames (drivers) {
  return drivers.forEach(function(element) {
    console.log(element.name)
  });
}

function logDriversByHometown (drivers, location) {
  return drivers.forEach(function (element) {
    if(element.hometown === location){
      console.log(element.name)
    }
  } )
}

function driversByRevenue (drivers) {
  const d = [...drivers]
  return d.sort(function (a,b) {
    return a.revenue - b.revenue
  })  
}

function driversByName(drivers) {
  const d = [...drivers]

  return d.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el) {
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  const sum = totalRevenue(drivers);
  const avg = sum / drivers.length;
  return avg;
}