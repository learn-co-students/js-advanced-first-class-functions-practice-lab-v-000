// Code your solution in this file!
const logDriverNames = function(drivers) {    //set variable name to function w/driver argument
  drivers.forEach(function(driver) {          //take array and iterate to give individual driver
    console.log(driver.name)                  //console.log individual driver name
  })
}

const logDriversByHometown = function(drivers, location) {   //set variable name to function w/driver array & location argument
  drivers.forEach(function(driver) {                        //iterate through arr to get to indiv driver
    if(driver.hometown === location)                        // look for drivers that have hometown same as location argument
    console.log(driver.name)                                //console.log those matching driver's names
  })
}

const driversByRevenue = function(drivers) {                //set variable to function w/driver array argument
  return drivers.slice().sort(function(driver1, driver2) {     //use slice() to create dupl array & sort 2 drivers at a time
    return driver1.revenue - driver2.revenue                  // put in order by subtractin driver 2 from driver 1
  })
}

const driversByName = function(drivers) {                      //set variable to function w/driver array argument
  return drivers.slice().sort(function(driver1, driver2) {     //use slice() to create dupl array & sort 2 drivers at a time
    return driver1.name.localeCompare(driver2.name)            //compare driver1 name & driver2 name using localeCompare
  })                                                           //which will make it case insensitive
}

const totalRevenue = function(drivers) {                      //set variable to function w/driver array argument
  return drivers.reduce(function(total, currentDriver) {     //use reduce to add up totals taking the total so far and currentDriver
    return currentDriver.revenue + total                     // add currentDriver's rev to the total so far
  }, 0)                                                       //need to check on this, got confused on this function
}

const averageRevenue = function(drivers) {                    //set var to function w/driver array argument
  return totalRevenue(drivers) / drivers.length               // take totalRevenue(driver) function from above & divide by number
}                                                             //of drivers for average
