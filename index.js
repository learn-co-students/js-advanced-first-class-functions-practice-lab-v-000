// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach((driver) => {
    console.log(driver.name);
  });
}

const logDriversByHometown = (drivers, location) =>{
  drivers.forEach((driver) => {
    if  (driver.hometown === location) console.log(driver.name);
  });
}

const driversByRevenue = (drivers) => {
  let new_drivers = []

  drivers.forEach((driver) => {
    new_drivers.push(driver)


  })

  new_drivers.sort((driver_a, driver_b) => {
    return driver_a.revenue - driver_b.revenue
  })

  return new_drivers
}

const driversByName = (drivers) => {
  let new_drivers = []

  drivers.forEach((driver) => {
    new_drivers.push(driver)
  })

  new_drivers.sort((driver_a, driver_b) => {
    return driver_a.name.localeCompare(driver_b.name)
  })

  return new_drivers
}

const totalRevenue = (drivers) => {
  let totalPrice = 0;

  drivers.forEach( (driver) => {
    totalPrice += driver.revenue;
  })

  return totalPrice;
}

const averageRevenue = (drivers) => {

  return totalRevenue(drivers)/(drivers.length)
}
