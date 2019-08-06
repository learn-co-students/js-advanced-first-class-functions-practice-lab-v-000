const logDriverNames = function(arr){
    arr.forEach(function(driver, i, arr){
        console.log(driver.name);
    });
};

const logDriversByHometown = function(driverObj, arg){
    driverObj.forEach(function(driver, i, driverObj){
        if (driver.hometown === arg){
            console.log(driver.name); 
        }
    });
};

const driversByRevenue = function(driverArr){
    return driverArr.slice().sort(function(a,b){
        return a.revenue - b.revenue;
    });
};

const driversByName = function(driverArr){
    return driverArr.slice().sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
};

const totalRevenue = function(driverArr){
    return driverArr.reduce(function(total, driver){
        return total + driver.revenue;
    }, 0);
};

const averageRevenue = function (driverArr) {
  return totalRevenue(driverArr) / driverArr.length;
};

