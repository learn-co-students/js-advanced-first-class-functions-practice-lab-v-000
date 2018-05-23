// Code your solution in this file!


function logDriverNames(drivers) {
  drivers.forEach(function(obj){console.log(obj.name)}
);}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(
    function(driver){
  if (driver.hometown === hometown) 
  {console.log(driver.name)}
    }
  );
}

function driversByRevenue(drivers){
  return drivers.slice().sort(
    function(a,b){return a.revenue - b.revenue}
  );
}

function driversByName(drivers){
  return drivers.slice().sort(
    function(a,b){return a.name.localeCompare(b.name)}
  );
}

function totalRevenue(drivers){
  let totalPrice = 0;

  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  });
  return totalPrice
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}