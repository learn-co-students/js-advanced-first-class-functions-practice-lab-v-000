function logDriverNames(arr){
  arr.forEach(
    function(obj){console.log(obj.name)}
  );
}

function logDriversByHometown(arr, loc){
  arr.forEach(
    function(obj){
      if (obj.hometown === loc){console.log(obj.name)}
    }
  );
}

function driversByRevenue(arr){
  return arr.slice().sort(
    function(a, b){return a.revenue - b.revenue}
  );
}

function driversByName(arr){
  return arr.slice().sort(
    function(a, b){return a.name.localeCompare(b.name)}
  );
}

function totalRevenue(arr){
  return arr.reduce(
    function(sum, obj){return sum + obj.revenue}, 0
  );
}

function averageRevenue(arr){
  return totalRevenue(arr) / arr.length;
}