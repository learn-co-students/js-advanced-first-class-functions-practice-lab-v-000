// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function(item){
    console.log(item.name);
  });
}
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a, b){
    return a.revenue-b.revenue;
  });
};

const driversByName = function(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, item) {
    return item.revenue+ total;
  }, 0);
}

const averageRevenue = function(drivers){
  return  totalRevenue(drivers)/drivers.length;
}
