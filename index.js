// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
      });
};

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function(driver) {
        if (hometown === driver.hometown) {
        console.log(driver.name);
        };
    });
};

function driversByRevenue(drivers) {
    drivers.sort(function(a, b) {
        return a.revenue - b.revenue;
    });
};
