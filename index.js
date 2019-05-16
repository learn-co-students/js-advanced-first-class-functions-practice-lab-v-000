// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(callback)
}
const callback = function (drivers) {
  console.log(drivers.name);
};

function logDriversByHometown(drivers, town) {
  drivers.forEach(function (townie) {

    if (townie.hometown === town) {
      console.log(townie.name);
    }
  });
}

 
   
    const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];
  
 
  
 const sortedDrivers = drivers.sort((a, b) => (a.revenue - b.revenue ? 1 : -1))

function driversByRevenue(drivers){
 return drivers.slice().sort(function(a, b){ 
 return a.revenue - b.revenue})
 }
 
 
  
 function driversByName(drivers){
   return drivers.slice().sort(function(a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
}

function totalRevenue(drivers){
  
  return  drivers.reduce(function(total, driver){
    return total + driver.revenue;
  }, 0);
  
  }
  
  function averageRevenue(drivers){
    return drivers.reduce(function (total, driver) {
        return total + driver.revenue;
    }, 0) / drivers.length;
  }




  
 
  
  
  