// Code your solution in this file!
function logDriverNames(driver) {
  const callback = function (person) {
    console.log(person.name);
  };

  driver.forEach(callback);
}


function logDriversByHometown(driver, location) {
  const callback = function (person) {
      if (person.hometown === location)
    console.log(person.name);
  };

  driver.forEach(callback);

}


function driversByRevenue(driver){
  const revenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  return driver.slice().sort(revenueSorter);

}


function driversByName(driver){
  const nameSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name) ;
  };
  return driver.slice().sort(nameSorter);
}


function totalRevenue(driver) {
  const getTotalRevenue = function (driver) {
    let totalPrice = 0;

    driver.forEach(function (person) {
      totalPrice += person.revenue;
    });

    return totalPrice;
  };

  return getTotalRevenue(driver);
}


// function averageRevenue(driver) {
//   let totalPrice = 0;
//   for(let i = 0; i < driver.revenue.length; i++){
//     totalPrice += driver.revenue[i];
//   }
//   let avg = total / driver.revenue.length;
// }


function averageRevenue(driver) {
  
    return totalRevenue(driver)/driver.length;

}
