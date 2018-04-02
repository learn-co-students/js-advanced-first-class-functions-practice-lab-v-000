function logDriverNames(list){
  for (const driver of list){
    console.log(driver.name);
  };
};

function logDriversByHometown(list, hometown){
  let newList = list.filter(function(driver){return driver.hometown===hometown})
  for (const driver of newList){
    console.log(driver.name);
  };
};

function driversByRevenue(list) {
  return list.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

function driversByName(list){
  return list.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(list) {
  return list.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
};

function averageRevenue(list) {
  return totalRevenue(list) / list.length;
};
