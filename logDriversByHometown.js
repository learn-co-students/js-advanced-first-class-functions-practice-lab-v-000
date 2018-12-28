function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver[location] === location) {
      console.log(driver.name);
    }
  });
}
