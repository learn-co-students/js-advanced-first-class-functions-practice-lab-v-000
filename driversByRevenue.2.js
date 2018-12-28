function driversByRevenue(drivers, revenue) {
  drivers.sort((driver) => {
    if (driver.revenue) {
      return driver.name;
    }
    // return driver.revenue - driver.revenue 
  });
}
