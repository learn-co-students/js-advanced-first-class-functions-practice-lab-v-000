function logDriverNames (collection) {
  for (const user of collection) {
    console.log(user.name);
  }
}

function logDriversByHometown(drivers, hometown){
  for (const user of drivers ){
    if (user.hometown === hometown){
      console.log(user.name);
    }
  }
}

const revenueSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;};

function driversByRevenue(drivers){
  return [...drivers].sort(revenueSorter);
}

const nameSorter = function (num1, num2) {
  return num1.name.localeCompare(num2.name) };

function driversByName(drivers){
    return [...drivers].sort(nameSorter);

}
const revenueaggregate = function (agg, el, i, arr) {
  return agg + el.revenue;
};

function totalRevenue(drivers){
  return drivers.reduce(revenueaggregate, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}






// => [2, 3, 5, 7, 13, 17]
