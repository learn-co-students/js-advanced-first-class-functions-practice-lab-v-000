// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, loc){
  drivers.forEach(function(driver){
    if (driver.hometown === loc){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(drivers){
  let myDrivers = drivers.slice(0);
  let sorted = myDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return sorted;
}

const driversByName = function(drivers){
  let myDrivers = drivers.slice(0);
  let sorted = myDrivers.sort(function(a, b){
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1; 
    } else if (nameA > nameB) {
      return 1;
    }
    return 0; 
  });
  return sorted;
}

const totalRevenue = function(drivers){
  let sorted = drivers.reduce(function(sum, el){
    return el.revenue + sum;
  }, 0);
  return sorted;
}
const averageRevenue = function(drivers){
  let sorted = drivers.reduce(function(sum, el){
    return el.revenue + sum;
  }, 0);
  return sorted/drivers.length;
}