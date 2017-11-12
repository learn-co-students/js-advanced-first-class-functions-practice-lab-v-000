function logDriverNames(drivers) {
    drivers.forEach(driver => console.log(driver.name));
}

let driverTowns = function(town: string) {
    return driver => {
        if (driver.hometown === town) {
            console.log(driver.name);
        }
    };
};

function logDriversByHometown(drivers: any[], town: string) {
    drivers.forEach(driver => {
        if (driver.hometown === town) {
            console.log(driver.name);
        }
    });
}

interface Driver {
    revenue: number;
    name: string;
    hometown: string;
}

function driversByRevenue(drivers: Driver[]): Driver[] {
    return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers: Driver[]): Driver[] {
    return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers: Driver[]): number {
    return drivers.map(driver => driver.revenue).reduce((a, b) => {
        return a + b;
    });
}

function averageRevenue(drivers: Driver[]): number {
    debugger;
    return totalRevenue(drivers) / drivers.length;
}
