function logDriverNames(drivers){
  drivers.forEach(function(element){
    console.log(element.name);
  });
};

function logDriversByHometown(driversArray, location){
  driversArray.forEach(function (element){
    if (element.hometown === location){
      console.log(element.name);
    }
  });
};

function driversByRevenue(originalDrivers){
  const driversCopy = [...originalDrivers];
  return driversCopy.sort(function revenueSorter(obj1, obj2){
    return obj1.revenue - obj2.revenue;
  });
};

function driversByName(originalDrivers){
  const driversCopy = [...originalDrivers];
  return driversCopy.sort(function sortDriversAlphabetically(obj1, obj2){
    return (obj1.name).localeCompare(obj2.name);
  });
};


function totalRevenue(drivers){
  const reduceDriverRevenues = function (agg, el){
    return agg + el.revenue;
  };
  return drivers.reduce(reduceDriverRevenues, 0);
};

function averageRevenue(drivers){
  return totalRevenue(drivers)/ drivers.length;
};