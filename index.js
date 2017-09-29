function logDriverNames(drivers){
  drivers.forEach((driver) => {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver) {
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}
