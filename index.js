function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if(driver.hometown === location) {
      console.log(driver.name);
    };
  });
}

const comparator = function(num1, num2){
  return num1 - num2;
};

function driversByRevenue(drivers){
  return drivers.slice().sort(function(nameA, nameB){
    return nameA.revenue - nameB.revenue;
  });
}

// The following functions worked to alphabetize the names
// but it was not passing the tests d/t an 'undefined' return.

// function driverNames(drivers){
//   return drivers.map(function(driver){
//     return driver.name;
//   });
// }
//
// const nameComparator = function(a, b){
//   return a.localeCompare(b);
// }
//
// function driversByName(drivers){
//   let names = driverNames(drivers);
//   return names.sort(nameComparator);
// }

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function(drivers){
  let revenues = drivers.map(function(driver){
    return driver.revenue
  });
  return revenues.reduce(function(sum, value){
    return sum + value
  });
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}
