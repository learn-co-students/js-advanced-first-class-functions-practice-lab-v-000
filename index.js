// Code your solution in this file!
const logDriverNames = function (drivers) {
drivers.forEach(function(el){
  console.log(el.name);
});
};

const logDriversByHometown = function (drivers, location) {
    return drivers.forEach(function(element) {
        if(element.hometown === location) {
            console.log(element.name)
        }
    })
}
const driversByRevenue = function (drivers) {
  debugger;
  let newArray = Object.create(drivers);
  debugger;
   return newArray.sort(function (a, b) {
       return a.revenue - b.revenue
   });
 }
// how to create a function driversByName and pass in drivrs ARRAY
function driversByName(drivers) {
 //how to create a new object instance
 let newDrivers = Object.create(drivers)
 //how to create sort with an array of newDrivers with argument of callback function to order strings alphabetically?
 return newDrivers.sort(function(a,b) {
// use function(a,b) { return a.name.LocaleCompare(b.name)} passed-in as argument to sort function
      return a.name.localeCompare(b.name)
});
};
//how to create a constant totalRevenue defined by function that accepts array of drivers
const totalRevenue  = function (drivers) {
//how to  assign a totalRevenue of 0 in memory?
let totalRevenue = 0;
//how to iterate over array of drivers, and how to add ea driver's revenue to sum stored in totalRevenue?
drivers.forEach(function(driver) {
  totalRevenue += driver.revenue;
});
//how to recall totalRevenue from memory?
return totalRevenue;
};
//how to create a constant averageRevenue assigned to function() with drivers array?
const averageRevenue = function(drivers) {
//how to output a calculated average revenue per drivers? numerator is totalRevenue(drivers), denominator is drivers.length
return totalRevenue(drivers) / drivers.length;
};
