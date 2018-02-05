// Code your solution in this file!
function logDriverNames(drivers){
 drivers.forEach((driver)=>{
  console.log(driver.name)
 })
}

function logDriversByHometown(drivers, town){
  drivers.forEach((driver) => {
    driver.hometown === town ? console.log(driver.name) : null
  })
}

function driversByRevenue(drivers){
  const sortedDrivers = drivers.slice().sort((a,b) => a.revenue - b.revenue)  
  return sortedDrivers
}

function driversByName(drivers){
  // const sortedDrivers = drivers.slice().sort((a, b) => a.name > b.name)
  const sortedDrivers = drivers.slice().sort((a, b) => a.name.localeCompare(b.name))
  return sortedDrivers

}

function totalRevenue(drivers){
  return drivers.reduce((acc, driver) => acc + driver.revenue, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}