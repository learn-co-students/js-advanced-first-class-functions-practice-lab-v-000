// Code your solution in this file!
function logDriverNames(arrayOfObjects){
  return arrayOfObjects.forEach(function(object){console.log(object.name)});
}

function logDriversByHometown(arrayOfObjects, location){
  const filteredByLocation = arrayOfObjects.filter(function(object){return object.hometown === location})
  logDriverNames(filteredByLocation)
}

function driversByRevenue(arrayOfObjects){
  const  copyOfArrayOfObjects = arrayOfObjects.slice();
  return copyOfArrayOfObjects.sort(function(a, b){return a.revenue - b.revenue})
}

function driversByName(arrayOfObjects){
  CopyOfArrayOfObjects = arrayOfObjects.slice()
    return CopyOfArrayOfObjects.sort(function(a, b){return a.name.localeCompare(b.name)})
}

function totalRevenue(arrayOfObjects){
     return arrayOfObjects.reduce(function(agg,currentValue){
       return agg + currentValue.revenue},0)
}

function averageRevenue(arrayOfObjects){
    return totalRevenue(arrayOfObjects)/arrayOfObjects.length
}
