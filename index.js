// Code your solution in this file!

const logDriverNames = function (driver) {
  driver.forEach(x => console.log(x.name));
}

const logDriversByHometown = function (driver, location) {
  driver.forEach(x => {if (x.hometown === location) {
    console.log(x.name)} })
}

const driversByRevenue = function (driver){
  const newDriver = driver.map(x => x)
 return newDriver.sort(function(a, b){ return a.revenue - b.revenue})
}

const driversByName = function (driver){
   const newDriver = driver.map(x => x)
  newDriver.sort(function(a, b){ return a.name.localeCompare(b.name)})
  return newDriver
}

const totalRevenue = function (driver){
  const revarr = driver.map(x => x.revenue);
  console.log(revarr)
  const total = revarr.reduce((a, c)=> a + c)
   return total
}

const averageRevenue = function (driver){
  const revarr = driver.map(x => x.revenue);
  console.log(revarr.length)
   const total = revarr.reduce((a, c)=> a + c)
  return (total/revarr.length)
}