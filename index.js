// Code your solution in this file!

const callback = function (driver) {
    console.log(driver.name);
};

function logDriverNames(drivers){
    drivers.forEach(callback);
};

function logDriversByHometown(drivers, hometown) {
    const hometownDrivers = drivers.filter(function (driver) {
        return driver.hometown === hometown;
      });

      logDriverNames(hometownDrivers); 
}; 

const numberSorter = function (num1, num2) {
    return num1 - num2;
};

function driversByRevenue(drivers) {
let newDrivers = drivers.slice(); 
newDrivers.sort((a, b) => (a.revenue > b.revenue) ? 1:-1); 

return newDrivers; 
}; 

function driversByName(drivers) {
    let newDrivers = drivers.slice(); 
    newDrivers.sort((a, b) => (a.name > b.name) ? 1:-1); 

    return newDrivers; 
}; 

function totalRevenue(drivers) {
    let totalRevenue = 0; 

    drivers.forEach(function (driver) {
        totalRevenue += driver.revenue;
    }); 

    return totalRevenue; 
};

function averageRevenue(drivers) {
    const total = totalRevenue(drivers); 
    const numberOfDrivers = drivers.length; 

    return total / numberOfDrivers;
}