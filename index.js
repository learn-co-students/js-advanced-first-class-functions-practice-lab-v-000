// Code your solution in this file!

// array1.forEach(function(element) {
//     console.log(element);
//   });

//   function driversWithRevenueOver(drivers,revenue) {
//     return drivers.filter(function(driver) {
//           return (driver.revenue >= revenue)
//     })
// }

function logDriverNames(drivers) {
    drivers.forEach(function(driver){
        console.log(driver.name)
    });
}

function logDriversByHometown(drivers, hometown) {
     drivers.filter(function(driver) {
    return driver.hometown == hometown
    }).forEach(function(driver) {
      console.log(driver.name)
      })
  
    }