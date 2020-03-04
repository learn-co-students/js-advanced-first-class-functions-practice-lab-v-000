logName = function (el) {
  console.log(el.name);
};

function logDriverNames(drivers) {
  drivers.forEach(logName);
}


// logByMatchingHometown = function (el) {
//   if (el.hometown === location) {
//     console.log(driver.name);
//   }
// };

function logDriversByHometown(drivers, location) {
  drivers.forEach(e => {
    if (e.hometown === location) {
      logName(e);
    }
  });
}



// function driversByRevenue(drivers) {
//   // let copyArr = [];
//   let copyArr = drivers;
//   copyArr.sort(function (a, b) {
//     return a.revenue - b.revenue;
//   });
// }