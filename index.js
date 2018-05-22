// Code your solution in this file!

//below are applied to arrays
    //for each performs a callback (cb) on an array
    //sort
    //reduce, takes in 2 arguments, a callaback function that takes in 4 arguments (aggregeate, element, index, array), and the initial value that the reduction should start from

const logDriverNames = function (drivers) {
    drivers.forEach(function (driver) {
     console.log(driver.name)
    })
  }
//above does the following
//takes in an argument of a object
//for each object, perform a method on that function

const logDriversByHometown = function (drivers, location) {
    drivers.forEach(function (driver){
        if (driver.hometown === location){
            console.log(driver.name)}
        })
}

//takes in 2 arguments, a collection, and a String
//uses the for each function on the collection, and performs an if statement on it


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

//takes in a collection of drivers
//slice removes elements form the array non destrucitively, by passing nothing it will yield itself
//use the sort function to compare by revenues

const driversByName = function (drivers){
  return drivers.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
  })
}
//takes in a collection of drivers
//slice removes elements form the array non destrucitively, by passing nothing it will yield itself
//use the sort function along with the localeCompare method to alphabetically sort the name attribute regardless of upper/lowercase

const totalRevenue = function (drivers){
      return drivers.reduce(function (agg, el, i, arr){
        //reduce could have also been written as below
        //   function (totalAggregate, currentDriver)
            return agg + el.revenue
      }, 0);
}

//takes in a collection of drivers
//pass on the reduce function which takes 2 arguments, a callback function and where you would like the reduce to begin
//the callback function is defined with 4 arguments, aggregeate total, element being iterated on, index of element, and the entire array

const averageRevenue = function (drivers){
    return totalRevenue(drivers) / drivers.length;
}

//averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
