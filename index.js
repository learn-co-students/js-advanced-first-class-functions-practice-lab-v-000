// Code your solution in this file!


function nameLog(object){
  for (const name in object){
    console.log(object[name])
  }
}

function logDriverNames(array){
  array.map(nameLog)
}

function logDriversByHometown(array, location){
  logDriverNames(filterByHometown(array, location))
  }

function filterByHometown(array, location){
  return array.filter(function (item){
    return item.hometown === location
  })
}

function sortByProperty(array, property){
  const newArray = array.slice()
  newArray.sort(function (a, b){
    return a[property] - b[property]
  }
)
return newArray
}

  function driversByRevenue(array){
    const newerArray = sortByProperty(array, "revenue")
    return newerArray
}

function driversByName(array){
  const newArray = array.slice()
  newArray.sort(function (a, b){
    return a["name"].localeCompare(b["name"])
  }
)
return newArray
}

function totalRevenue(array){
  return array.reduce(callBackFunction, 0)
}

function callBackFunction(agg, el, i, arr){
    return agg += el["revenue"]
}

function averageRevenue(array){
  return totalRevenue(array)/array.length
}
