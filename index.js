// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
     console.log(driver.name);   
    });
    // OR could do:
    // for (driver of drivers){
    //     console.log(driver.name);
    // }
}

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver){
        if (driver.hometown === location){
            console.log(driver.name);
        }
    });   
}

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(drivers) {
    const driversCopy = [...drivers];
    return driversCopy.sort(function(a, b){
        return a.revenue - b.revenue;
    });
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
function driversByName(drivers) {
    const driversCopy = [...drivers];
    return driversCopy.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
function totalRevenue(drivers) {
    return drivers.reduce(function(agg, el){
        return agg + el.revenue;
    }, 0);
}


// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
function averageRevenue(drivers) {
    return drivers.reduce(function(agg,el,i,arr){
        const aggregate = agg + el.revenue;
        if (i === arr.length - 1){
            return (aggregate/(i + 1));
        }   
        else{
            return aggregate;
        }
    },0);
}