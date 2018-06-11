// Code your solution in this file!
function logDriverNames(arr){
    arr.forEach(driver => {
        console.log(driver.name);
    });
};

function logDriversByHometown(arr, location){
    return arr.filter(driver => driver.hometown === location)
            .forEach(driver => console.log(driver.name));
};

function driversByRevenue(arr){
    return arr.slice().sort((a,b) => a.revenue > b.revenue);
};

function driversByName(arr){
    return arr.slice().sort((a,b) => a.name.localeCompare(b.name));
};

function totalRevenue(arr){
    return arr.reduce((acc, driver) => {
        return acc+ driver.revenue;}
    , 0);
};

function averageRevenue(arr){
    return totalRevenue(arr) / arr.length;
};

