// Code your solution in this file!
const logDriverNames = function (arr) {
  arr.forEach(function (driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (arr, location) {
  arr.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (arr) {

  return arr.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
    })

}

const driversByName = function (arr) {
  return arr.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}
 const totalRevenue = function (arr) {
   return arr.reduce(function (agg, el) {
     return agg + el.revenue;
   }, 0)
 }

 const averageRevenue = function (arr) {
   return totalRevenue(arr) / arr.length;
 }
