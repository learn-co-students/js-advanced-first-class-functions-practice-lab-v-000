function driversByRevenue(drivers) {
  let driversCopy = , drivers;
  return driversCopy.sort((a, b) => {
    // if (driver.revenue > 0) {
    //   return driver.name;
    // }
    return a.revenue - b.revenue;
  });
}
