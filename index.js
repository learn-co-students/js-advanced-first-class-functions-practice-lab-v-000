// Code your solution in this file!

function logDriverNames(drivers){
    drivers.forEach(function(element) {
        console.log(element.name);
    });
};

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
}

function driversByRevenue(drivers){
    const newList = [...drivers];

    const byRevenue = newList.sort(function(a,b){
      if (a.revenue < b.revenue) {
        return -1;
      }
      else if (a.revenue > b.revenue){
        return 1;
      }
      else {
        return 0;
      };
    });  

    return byRevenue;
};

/*function driversByName(drivers){
    const newList = [...drivers];

    const byName = newList.sort(function(a,b){
      if (a.name < b.name) {
        return -1;
      }
      else if (a.name > b.name){
        return 1;
      }
      else {
        return 0;
      };
    });  

    return byName;
};*/

function driversByName(drivers){
    const newList = [...drivers];

    const byName = newList.sort(function(a,b){
      return a.name.localeCompare(b.name);
    });  

    return byName;
};

function totalRevenue(drivers) {
    const revenueSum = [];
  
    drivers.forEach(function(driver) {
      const indivRevenue = driver.revenue;
      revenueSum.push(indivRevenue);
    });
    
    const total = revenueSum.reduce(function(a, b) {
      return a + b;
    });
  
    return total;
  };

  function averageRevenue(drivers) {
    const revenueSum = [];
  
    drivers.forEach(function(driver) {
      const indivRevenue = driver.revenue;
      revenueSum.push(indivRevenue);
    });
    
    const theRevenueSum = revenueSum.reduce(function(a, b) {
      return a + b;
    });
  
    return theRevenueSum / (revenueSum.length);
  };