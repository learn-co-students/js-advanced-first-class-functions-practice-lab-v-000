// Code your solution in this file!
//how to creata a constant logDriversNames assigned to anonymous function with drivers array argument
const logDriverNames = function (drivers) {
//how to iterate of drivers array and want to execute a function 1x for ea element with cb argument
drivers.forEach(function(el){
//how to output to console the element's name
  console.log(el.name);
});
};
//how to creata a constant logDriversByHometown assigned to anonymous function with drivers array and location argument
const logDriversByHometown = function (drivers, location) {
//how to iterate of drivers array and want to execute a function 1x for ea element with cb argument
    return drivers.forEach(function(element) {
//how to determine if the element hometown value is strictly equivalent to location argument
        if(element.hometown === location) {
//how to output to console the element's name when its prereq is met.
            console.log(element.name)
        }
    })
}
//how to create a constant driversByRevenue assigned to anonymous function() with drivers array argument
const driversByRevenue = function (drivers) {
//  debugger;
//how to assign to a variable, a new Object of new array with drivers array as argument
  let newArray = Object.create(drivers);
//  debugger;
//how to output sorted function of the new variable
   return newArray.sort(function (a, b) {
//how to output and sort with callback function of 2 integer arguments in ascending order
       return a.revenue - b.revenue
   });
 };
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
//how to create a constant averageRevenue assigned to anonymous function() with drivers array argument?
const averageRevenue = function(drivers) {
//how to output a calculated average revenue per drivers? numerator is totalRevenue(drivers),
//denominator is drivers.length
return totalRevenue(drivers) / drivers.length;
};
