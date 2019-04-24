// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(el, i, arr){
    console.log(el.name);
  });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(el, i, arr){
    // debugger
    el.hometown === location ? console.log(el.name) : el.hometown;
  });
}

function driversByRevenue(drivers){
  const driversArray = [...drivers]; 
  driversArray.sort(function(a,b){
    return a.revenue - b.revenue;
  });
  return driversArray;  
}

function driversByName(drivers){
  const driversArray = [...drivers]; 
  driversArray.sort(function(a,b){
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  return driversArray;
}

function totalRevenue(drivers){
  const revenueSum = [...drivers];
  return revenueSum.reduce(function(agg, el, i, arr){
    return agg + el.revenue;
  },0);
}

function averageRevenue(drivers){
  const avgRevenue = [...drivers].reduce(function(agg, el, i, arr){
    return (agg + el.revenue)
  },0)/drivers.length;
  return avgRevenue;
}
