// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach( function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach( function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}


function totalRevenue(drivers){
  const reduceRevenue = function (agg, el, i, arr){
    return agg + el.revenue;
  }

  return drivers.reduce(reduceRevenue, 0);
}

function averageRevenue(drivers){
  const revenuetotal =  totalRevenue(drivers);
  console.log(revenuetotal);
  //debugger;
  return revenuetotal / drivers.length;
}


function driversByRevenue(drivers){
  let revenuearray = [];
  let driverArray = [];
  drivers.forEach (function (driver) {
    revenuearray.push(driver.revenue);
  });
  const revenueSorter = function (num1, num2){
    return num1 - num2;
  };
  //debugger;
  revenuearray.sort(revenueSorter);
  //debugger;
  revenuearray.forEach( function (revenue) {
    drivers.forEach( function (driver) {
      if (driver.revenue === revenue) {
        //debugger;
        driverArray.push(driver);
      }
    });
  });
  console.log(driverArray);
  //debugger;
  return driverArray;
}


function driversByName(drivers){
  let driverNameArray = [];
  let driverArray = [];
  drivers.forEach (function (driver) {
    driverNameArray.push(driver.name + driver.hometown);
  });
  const nameComparator = function (a, b) {
    return a.localeCompare(b);
  };
  driverNameArray.sort(nameComparator);
  debugger;

  //console.log(driverNameArray);
  driverNameArray.forEach( function (name) {
    drivers.forEach( function (driver) {
      if (driver.name + driver.hometown === name) {
        driverArray.push(driver);
        debugger;
      }
    });
  });
  console.log(driverArray);
  debugger;
  return driverArray;
}
