// Code your solution in this file!

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers) {
    drivers.forEach(function (el) {
      console.log(el.name);
    })
};


function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (el) {
    if (el["hometown"] === hometown) {
      console.log(el["name"]);
    }
  })
};

function driversByRevenue(drivers) {
    return drivers.slice().sort(function (a,b) { // I keep forgetting return!
      return a.revenue - b.revenue;
    })
};

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {
    // console.log(`driversByName: ${a.name}`);
    return a["name"].localeCompare(b["name"]);
  });
};

function totalRevenue(drivers) {
    return drivers.reduce(totalFunction, 0) // DON'T FORGET YOUR RETURNS WHEN YOU DO REDUCE!
};

function totalFunction(agg, el, i, arr) { // Seems like .reduce supplies these arguments
                                            // and I just need to add the code to manipulate them.
                                            // "agg" comes from the second argument after reduce, which is 0.
  return agg += el.revenue;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
//   return drivers.reduce(averageFunction, 0);
// }
//
// function averageFunction(agg, el, i, arr) {
//   return
// }
