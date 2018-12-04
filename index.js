// Code your solution in this file!
function logDriverNames(drivers) {
  for(const driver of drivers){
    console.log(driver.name);
  }

}

function logDriversByHometown(drivers,location){
  for (const driver of drivers){
    if (location === driver.hometown){
      console.log(driver.name);
    }
  }
}

function driversByRevenue(drivers){
  const driversCopy = [...drivers];
  driversCopy.sort(function (a,b){
    const revA = a.revenue;
    const revB = b.revenue;

    let comparison = 0;

    if (revA > revB) {
    comparison = 1;
    } else if (revA < revB) {
    comparison = -1;
    }
    return comparison;
    });
  return driversCopy;
}

function driversByName(drivers){
  const driversCopy = [...drivers];
  driversCopy.sort(function(a,b){
      const name1 = a.name;
      const name2 = b.name;
    return name1.localeCompare(name2);
  });
  return driversCopy;
}

function totalRevenue(drivers){

  const sumRevenue = function (agg,el,i,arr){

    return agg + el.revenue;
  };

  return drivers.reduce(sumRevenue, 0);

  }

  function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;

  }


