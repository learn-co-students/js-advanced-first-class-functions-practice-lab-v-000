function logDriverNames(drivers){
  for(const driver of drivers){
    console.log(driver.name);
  }
};


function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location ){
      console.log(driver.name)
    }
  })
};

function driversByRevenue(drivers){
  return [...drivers].sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return driver.revenue + total;
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}




























// function logDriverNames(list){
//   list.forEach(function(el){
//     console.log(el.name);
//   });
// };
//
// function logDriversByHometown(list, location){
//   list.forEach(function(el){
//     if (el.hometown === location){
//       console.log(el.name);
//     };
//   });
// };
//
// function driversByRevenue(list){
//   return [...list].sort(function(a, b) {
//     return a.revenue - b.revenue;
//   });
// };
//
// function driversByName(list){
//   return [...list].sort(function(a, b) {
//     return a.name.localeCompare(b.name);
//   });
// };
//
// function totalRevenue(list){
//   const totalRev = function (agg, el, i, arr){
//     return agg += el.revenue;
//   };
//   return list.reduce(totalRev, 0);
// };
//
// function averageRevenue(list){
//   return totalRevenue(list) / list.length;
// };
