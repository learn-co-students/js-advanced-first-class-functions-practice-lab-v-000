// Code your solution in this file!

function logDriverNames(list) {
  list.forEach(function (object) {
    console.log(object.name);
  })
}

function logDriversByHometown(list, town) {
  list.forEach(function (object) {
    if (object.hometown === town) {
      console.log(object.name);
    }
  });
}

function driversByRevenue(list) {
  let revenueList = [...list].sort(function(a,b){return a.revenue - b.revenue});
  return revenueList;
}

function driversByName(list) {
  let nameList = [...list].sort(function(a,b){return a.name.localeCompare(b.name)});
  return nameList;
}

function totalRevenue(list) {
  //using fat arrow function
  let reducer = (accumulator, currentValue) => accumulator + currentValue.revenue;
  return list.reduce(reducer, 0);
}

function averageRevenue(list) {
  return totalRevenue(list) / list.length;
}
