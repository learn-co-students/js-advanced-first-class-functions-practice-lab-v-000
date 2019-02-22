// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(object){ console.log(object.name);});
}

function logDriversByHometown(array, location) {
  array.forEach(function(object){
    if (object.hometown === location) {
      console.log(object.name);
    }
  });
}

function driversByRevenue(array){
  return [...array].sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(array){
  return [...array].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(array){
  let total = 0;
  array.forEach(function(object){
    total += object.revenue;
  });
  return total;
}

function averageRevenue(array){
  return totalRevenue(array)/array.length;
}
