// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(driver => {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(driver => {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  })
}

// function driversByRevenue(drivers){
//   return [...drivers].sort((a,b) => (a.revenue > b.revenue) ? 1 : (a.revenue < b.revenue) ? -1 : 0);
// }

function driversByRevenue(drivers){
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  return [...drivers].sort((a,b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
}

function totalRevenue(drivers){
  const revenues = drivers.map(dr => dr.revenue);
  return total = revenues.reduce(((acc, rev) => acc + rev), 0);
}

function averageRevenue(drivers){
  const total = totalRevenue(drivers);
  return total/drivers.length;
}
