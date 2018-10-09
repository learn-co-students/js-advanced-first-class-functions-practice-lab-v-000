// Code your solution in this file!

// const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];



const logDriverNames = function (drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name)
    }
)}; 

// const logDriverNames = function (drivers) {
//     drivers.map(function (driver) {
//         console.log(driver.name)
//     }
// )}; 

//ME: forEach does the same thing as map here! (not all kinds of parameters that can be passed into .forEach are required)
//ME: "return" doesn't need to be stated explicitly on lines 4 and 19; the return must be implicit

const logDriversByHometown = function (drivers, sameHometown) {
    drivers.forEach(function (driver) {
        if (driver.hometown === sameHometown) {
            // return driver.name;
            // ??? why did I need console.log here and return didn't work?
            console.log(driver.name);
        }
    });
};

// Lab solution: 

// const logDriversByHometown = function (drivers, hometown) {
//     drivers.forEach(function (driver) {
//       if (driver.hometown === hometown) {
//         console.log(driver.name);
//       }
//     });
// };

// Lab Solution:
const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
  };

  //ME: so you CAN directly subtract one instance of the collection from another by calling the method represented by the 
  //attribute to be sorted. 
  //ME: .slice() is a nice simple way to return a new array nondestructively that is sorted, much more so than making a new blank
  //array and pushing into it or using methods such as filter or map. sweet!

// my attempt:
// const driversByRevenue = function (drivers) {
//     drivers.forEach(function driver)function (revenue1, revenue2) {
//     revenue1 - revenue2);
// }
    
// }

// const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];

// //   drivers.slice()

// const driversByName = function (drivers) {
//     return drivers.sort(function (driverName) {
//         return driverName;
//     }.sort(driverName.name))
// };

//ME: error: driverName not defined (outside of scope???)

// const driversByName = function (drivers) {
//     return drivers.sort(function (driverName) {
//         return driverName;
//     });
// };

// ME above didn't work, even with two arguments and driverName.name - driverName.name; localcompare was needed ... because of UNICODE? 
// If so then why is the returned object entirely the same in console ... coincidence?

const driversByName = function (drivers) {
    return drivers.slice().sort(function (driverName1, driverName2) {
        return driverName1.name.localeCompare(driverName2.name);
    });
};

// const driversByName = function (drivers) {
//     return drivers.slice().sort(function (driverOne, driverTwo) {
//       return driverOne.name.localeCompare(driverTwo.name);
//     });
//   };


const totalRevenue = function (drivers) {
    return drivers.reduce(function (totalRevenue, currentDriver) {
        //WHY DO WE NEED TO USE 'RETURN" HERE AND NOT IN PREVIOUS TASKS IN THIS LAB??? ????
        //what goes in the cb function passed through reduce is accumulator and AN INSTANCE OF THE COLLECTION (not the initial value because 
        //   the initial value is the second argument after the whole long cb function that is passed through .reduce
        //CHALLENGE work through reduce section on own in practice and do AAQ about last difficult examples in First Class Function
        // Practice lesson (questions in P notes)
        // return totalRevenue += currentDriver.price
        //ME: above is not correct ... .reduce apparently doesn't increment, but it keeps track of The variable representing the accumulation (totalRevenue here)
        //   and the specific attribute of the instance of the collection that is passed as a parameter in the callback function part of the first paramater for
        //   of .reduce with that specific attribute called on the instance of the collection that is ENCAPSULATED!!! in the block of the callback function!!!
        //.reduce has an ACCUMULATOR, NOT an incrementer
        return currentDriver.revenue + totalRevenue;
    }, 0);
};

// const totalRevenue = function (drivers) {
//     return drivers.reduce(function (total, currentDriver) {
//       return currentDriver.revenue + total;
//     }, 0);
//   };

// const reduceProductPrices = function (agg, el, i, arr) {
//     console.log('The aggregate up to this point is:', agg);
//     console.log('The index of the current element is:', i);
//     console.log("The current element's price is:", el.price);
//     console.log('----------------');
   
//     return agg + el.price;
//   };
   
//   products.reduce(reduceProductPrices, 0);

// const averageRevenue = function (drivers) {
//     return totalRevenue(drivers) / drivers.length - 1
// };

//ME: not the -1 ... why not ??? when is it used? when there's an index being represented ???
//(here was the error in the browser from lab test using -1 : averageRevenue()
// calculates the average revenue across all drivers ‣
// AssertionError: expected 3699 to equal 3700
//     at Context.<anonymous> (test/indexTest.js:90:42))

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
};