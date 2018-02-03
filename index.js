// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(el, i, arr){
    console.log(`${el.name}`);
  });
};

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(el, i, arr){
    if (el.hometown === hometown) {
      console.log(`${el.name}`);
    };
  });
};

function driversByRevenue(drivers){
  let driversCopy = [...drivers];
  return driversCopy.sort(function(a,b){
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers){
  let driversCopy = [...drivers];
  return driversCopy.sort(function(a,b){
    return (a.name).localeCompare(b.name);
  });
};

function totalRevenue(drivers){
  return drivers.map(el => el.revenue).reduce(function(agg, el){
    return agg + el;
  });
};

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
};
