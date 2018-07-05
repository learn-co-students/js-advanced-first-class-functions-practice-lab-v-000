// Code your solution in this file!

function logDriverNames(list) {
  return list.map(function(driver){
    console.log(driver.name);
  });
}
//filter by key = name then console log each element in the array
// do the filter by hometown, then call logDriverNames on that array

function logDriversByHometown (list, hometown) {
  return logDriverNames( list.filter(function (driver){
    return driver.hometown === hometown;
    })
  );
}

function driversByRevenue (list) {
  return logDriverNames (list.sort(function (driver){
    return driver.revenue;
  }));
}
