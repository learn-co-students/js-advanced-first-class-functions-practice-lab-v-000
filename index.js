// Code your solution in this file!

const dn = function(el, i, arr) {
  console.log(el.name)
}

function logDriverNames(drivers) {
  drivers.forEach(dn);
}

const dnh = function(el, i, arr) {
  console.log(el.name)
}


const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(a,b) {return (a.revenue > b.revenue) ? 1 : ((b.revenue > a.revenue) ? -1 : 0);} );
}


const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(drivers) {
  let total = 0
  drivers.forEach(function (driver){
    total+= driver.revenue;
  })
  return total;
}

function averageRevenue(drivers) {
  let total = 0
  drivers.forEach(function (driver){
  total+= driver.revenue
})
  return total / drivers.length
}
