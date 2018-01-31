// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
  console.log(driver.name);
});
}

function logDriversByHometown(drivers,location){
  drivers.forEach(function(driver){
    if(driver.hometown === location){
      console.log(driver.name)
      }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(dr1,dr2){
    return dr1['revenue'] - dr2['revenue'];
  });
}

function driversByName(drivers){
  return drivers.slice().sort(function(dr1,dr2){
    return dr1['name'].localeCompare(dr2['name'])
  })
}

function totalRevenue(drivers){
  const reduceTotalRevenue = function(agg,el,i,arr){
    return agg+el.revenue;
  }

  return drivers.reduce(reduceTotalRevenue,0)
}

function averageRevenue(drivers){
  const reduceAverageRevenue = function(agg,el,i,arr){
    return (agg*i+el.revenue)/(i+1)
  }
  return drivers.reduce(reduceAverageRevenue,0)
}
