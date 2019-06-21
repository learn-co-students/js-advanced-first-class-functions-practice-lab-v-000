// Code your solution in this file!

function logDriverNames(driver) {
  driver.forEach(function(element) {console.log(element.name)});
}

function logDriversByHometown(driver, location) {
  driver.forEach(function(element) {
    if (element.hometown === location) {
      console.log(element.name);
    }});
}

function driversByRevenue(driver) {
  let sorted_driver = driver.slice(0);
  sorted_driver.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return sorted_driver;
}

function driversByName(driver) {
  let sorted_driver = driver.slice(0);
  sorted_driver.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return sorted_driver;
}

function totalRevenue(driver) {
  const reduced = driver.reduce(function(a,b) {
    return {revenue: a.revenue + b.revenue};
  })
  return reduced.revenue;
}

function averageRevenue(driver) {
  return Math.round(totalRevenue(driver) / driver.length * 100)/100;
}

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];
console.log(averageRevenue(drivers));
