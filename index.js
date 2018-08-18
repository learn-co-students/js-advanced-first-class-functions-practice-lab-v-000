  // Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

const callback = function (el, i, arr) {
  console.log(el.name);
};

function logDriverNames() {
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, driversTown) {
  const callback = function (el, i, arr) {
    if (el.hometown === driversTown) {
      console.log(el.name);
    }
  };
  drivers.forEach(callback);
}

function driversByRevenue() {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue })
  return newDrivers
}

function driversByName () {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
   return a.name.localeCompare(b.name);
});
  return newDrivers
}

const reduceDriversRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

function totalRevenue () {
    return drivers.reduce(reduceDriversRevenue, 0 );
}

function averageRevenue() {
  return drivers.reduce(reduceDriversRevenue, 0 ) /  drivers.length
}

/*
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;

  }, 0);

};



const averageRevenue = function (drivers) {

  return totalRevenue(drivers) / drivers.length;

};

*/
