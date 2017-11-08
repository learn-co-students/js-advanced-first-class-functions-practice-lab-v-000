// Code your solution in this file!
 function logDriverNames(arr)
 {
   arr.forEach(function(el)
 {
   console.log(el.name);
 });
 }

 function logDriversByHometown(arr,location)
 {
   arr.forEach(function(el) {
   if (el.hometown === location)
   {
   console.log(el.name);
   }
 });
 }


 function driversByRevenue(arr)
 {
    return arr.slice().sort(function(a,b){ return a.revenue > b.revenue;});
 }

function driversByName(arr)
{
  return arr.slice().sort(function(a,b){return a.name.localeCompare(b.name);});
}

function totalRevenue(arr)
{
  return arr.reduce(function (sum,el) { return sum + el.revenue;},0);
}

function averageRevenue(arr)
{
  return totalRevenue(arr)/arr.length;
}
