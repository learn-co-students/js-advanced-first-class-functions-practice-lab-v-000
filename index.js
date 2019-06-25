// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(array) {
  array.forEach(function(element) {
    console.log(element.name)
  })
}

function logDriversByHometown(array, location) {
  array.forEach(function(element) {
    if (element.hometown == location) {console.log(element.name)}
  })
}

function driversByRevenue(array) {
  const newArray = [...array]
    newArray.sort(function (a, b) {
    return a['revenue'] - b['revenue'];
  });
  return newArray
}

function driversByName(array) {
  const newArray = [...array];

  return newArray.sort(function(element, element_2) {
    return element.name.localeCompare(element_2.name)
  })
}

function totalRevenue(array) {
  newArray = [...array]
  const calculateRevenue = function (total, element) {
    return total += element.revenue
  };

  return newArray.reduce(calculateRevenue, 0);
}

function averageRevenue(array) {
  debugger
  return totalRevenue(array) / array.length
}
