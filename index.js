// Code your solution in this file!
function logDriverNames(collection) {
  for (let item of collection) {
    console.log(item.name)
  }
}

function logDriversByHometown(collection, hometown) {
  for (let item of collection.filter(function (individual) {return individual.hometown === hometown})) {
    console.log(item.name)
  }
}

function driversByRevenue(collection) {
  let newArray = [...collection]
  return newArray.sort(function(a,b){return a.revenue-b.revenue})
}

function driversByName(collection) {
  let newArray = [...collection]
  return newArray.sort(function(a,b){return a.name.localeCompare(b.name)})
}

function totalRevenue(collection) {
  return collection.reduce(function(agg, el, i, array){return agg+el.revenue},0)
}

function averageRevenue(collection) {
  return totalRevenue(collection)/collection.length
}
