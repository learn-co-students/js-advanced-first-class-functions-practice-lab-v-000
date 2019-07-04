// Code your solution in this file!
function logDriverNames(drvs){
  drvs.forEach(function(drv){
    console.log(drv.name);
  });
}

function logDriversByHometown(drvs,location){
  drvs.forEach(function(drv){
    if(drv.hometown===location){
      console.log(drv.name);
    }
  });
}

function driversByRevenue(drvs){
  myDrvs=drvs.slice();
  return myDrvs.sort(function(a,b){
    //Subtract second driver's revenue from first's. Two should switch if number is negative.
    return a.revenue-b.revenue;
  });
}

function driversByName(drvs){
  myDrvs=drvs.slice();
  return myDrvs.sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drvs){
  console.log(drvs[0].revenue);
  return drvs.reduce(getTotal,0);
}

function getTotal(total,el){
  return total+el.revenue;
}

function averageRevenue(drvs){
  return totalRevenue(drvs)/drvs.length;
}

