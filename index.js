// Code your solution in this file!
function logDriverNames(drivers){
  const log = function(el,i,arr){
    console.log(el.name)
  }
  drivers.forEach(log)
}

function logDriversByHometown(driv, town){
  const log = function(el,i,arr){
    if (el.hometown === town){
      console.log(el.name)
    }
  }
  driv.forEach(log)
}

function driversByRevenue(driv){
  arr = [...driv]
  return arr.sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(driv){
  arr = [...driv]
  return arr.sort(function(a,b){
    return (a.name).localeCompare(b.name)
  })
}

function totalRevenue(driv){
  const cb = function(agg,el,i,arr){
    return agg + el.revenue
  }

  return driv.reduce(cb, 0)
}

function averageRevenue(driv){
  return totalRevenue(driv)/(driv.length)
}

  // const cb = function(agg,el,i,arr){
  //   return agg.push(el.name)
  // }
  // const names = arr.reduce(cb, [])
  // for (const el of names){
  //   console.log(el)
  // }
