// logs the name of each driver

function logDriverNames(drivers){
  drivers.forEach(function(el) {
      console.log(el.name);
    });
};

// logs the name of each driver whose hometown matches the passed-in argument

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(el) {
        if (el.hometown == location) {
        console.log(el.name)
     }
  });
};

// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
// "after each" hook for "uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)"

function driversByRevenue(drivers) {
      return drivers.concat().sort(function (low,high) {
      return low.revenue - high.revenue
    });
};

// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)

function driversByName(drivers)  {
  return drivers.concat().sort(function (a,b) {
         return a.name.localeCompare(b.name)
  });
};


// uses the reduce() method to sum the revenue of every driver and return the total

function totalRevenue(drivers) {
    return drivers.reduce(function (agg, el) {
      return agg + el.revenue
    }, 0)
};


// calculates the average revenue across all drivers

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ drivers.length
};
