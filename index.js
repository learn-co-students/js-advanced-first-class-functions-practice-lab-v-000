// Code your solution in this file!
function logDriverNames(data){
  return data.forEach(function(element){console.log(element.name)});
}
function logDriversByHometown(data, loc){
  return data.forEach(function(element){if(element.hometown == loc){return console.log(element.name);}})
}
function driversByRevenue(data){
  return [...data].sort(function (a,b){return a.revenue - b.revenue;});
}
function driversByName(data){
  return [...data].sort(function (a,b){return a.name.localeCompare(b.name);});
}
function totalRevenue(data){
  let total = 0;
  data.reduce(function(agg, element){return total += element.revenue;},[]);
  return total;
}
function averageRevenue(data){
  const total = totalRevenue(data);
  return total / data.length;
  // data[0].values.forEach(function(element){})
}
