// Code your solution in this file!


const logDriverNames = function (drivers) {
    drivers.forEach(driver => {
        console.log(driver.name)
    });
}

const logDriversByHometown = function (drivers, hometown) {
    drivers.forEach(driver => {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    });
}

const driversByRevenue = function (drivers) {
      
  return drivers.slice().sort(function (driverOne, driverTwo) {
    
    return driverOne.revenue - driverTwo.revenue;
  });
};

 const driversByName = function(drivers){
     const newDrivers = drivers.slice()
     
      return  newDrivers.sort(function(a, b){
            return a.name.localeCompare(b.name);
            
        })
    }


    const totalRevenue = function(drivers){
       const total = drivers.reduce((a, b) => ({revenue: a.revenue + b.revenue}))
       return total.revenue
   
    }

    const averageRevenue = function (drivers) {
        return totalRevenue(drivers) / drivers.length;
      };