// Receives an array of `driver` objects and logs the `name` attribute of each `driver` to the console.
function logDriverNames(driver) {
  driver.forEach(function(driver) {
    console.log (driver.name);
  })
}

// Receives an array of `driver` objects as the first argument and a location as the second argument. The function logs to the console the `name` attribute of each `driver` whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(driver, location) {
  driver.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

// Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `revenue` attribute from lowest to highest.
function driversByRevenue(driver) {
  let newDrivers = [...driver];
  return newDrivers.sort(function(a,b) {
    return a.revenue - b.revenue
  })
}

// Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `name` attribute from A to Z. Here, you may have to use the [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method.
// driversByName()

// Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.
// totalRevenue()

// Receives an array of `driver` objects and returns the average revenue earned by each driver.
// averageRevenue()