// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function (element){
      console.log(element.name);
  });
};
function logDriversByHometown(drivers, location){
  return drivers.filter(function(driver){
      if (driver.hometown === location) {
        console.log(driver.name);
      }
  });
};
function driversByRevenue(drivers){
  let nArray = [];
  drivers.forEach(function (driver){
    nArray.push(Object.assign({}, driver));
  });
  return nArray.sort(function (a, b) {
    if (a.revenue < b.revenue)
      return -1;
    if (a.revenue > b.revenue)
      return 1;
    return 0;
  });
};
function driversByName(drivers){
  let nArray = [];
  drivers.forEach(function (driver){
    nArray.push(Object.assign({}, driver));
  });
  return nArray.sort(function (a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  });
};
function totalRevenue(drivers){
  return drivers.reduce(function(agg, el, i, arr) {
      return el.revenue + agg;
  }, 0);
};
function averageRevenue(drivers){
  let sum = drivers.reduce(function(agg, el, i, arr) {
      return el.revenue + agg;
  }, 0);
  return answer = (sum / drivers.length);
};
