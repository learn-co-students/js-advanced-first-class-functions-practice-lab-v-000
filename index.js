// Code your solution in this file!
function logDriverNames(driversArray){
  driversArray.forEach(function(element){
    console.log(element["name"]);
  });
};

function logDriversByHometown(driversArray, hometown){
  driversArray.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name);
    };
  });
};

function driversByRevenue(driversArray){
  const newArray = [];
  driversArray.forEach(function(driver){
    newArray.push(driver);
  });
  newArray.sort(function(a, b){
    return a.revenue - b.revenue;
  });
  return newArray;
};

function driversByName(driversArray){
  const newArray = [];
  driversArray.forEach(function(driver){
    newArray.push(driver);
  });
  newArray.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
  return newArray;
};

function totalRevenue(driversArray){
  let totalRevenue = 0;
  driversArray.forEach(function(driver){
    totalRevenue += driver.revenue;
  });
  return totalRevenue;
};

function averageRevenue(driversArray){
  let totalRevenue = 0;
  driversArray.forEach(function(driver){
    totalRevenue += driver.revenue;
  });
  const averageRevenue = totalRevenue / driversArray.length;
  return averageRevenue;
}
