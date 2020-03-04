logName = function (el) {
  console.log(el.name);
};

function logDriverNames(drivers) {
  drivers.forEach(logName);
}

// logByMatchingHometown = function (el) {
//   if driver.hometown === location{
//     console.log(driver.name)
//   }
// }

// function logDriversByHometown(drivers, location) {
//   drivers.forEach(e => {
//     if (driver.hometown === location) {
//       console.log(driver.name)
//     }
//   });
// }



function driversByRevenue(drivers) {
  let copyArr = [];
  copyArr = drivers;
  copyArr.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}