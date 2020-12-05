// Code your solution in this file!

function logDriverNames(col) {
  col.forEach(function (el, i, arr) {
    console.log(el.name)
   })
}


function logDriversByHometown(col, town) {
  col.forEach( function (el, i, arr) {
    if (el.hometown === town ) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(col) {
  return [...col].sort(function (dr1, dr2) {
    return dr1.revenue - dr2.revenue
  })
}

function driversByName(col) {
  return [...col].sort(function (dr1, dr2) {
    return dr1.name.localeCompare(dr2.name)
  })
}

function totalRevenue(col) {
  return col.reduce( function (agg, el, i, arr) {
    console.log(agg + el.revenue)
    return agg + el.revenue
  }, 0)
}

function averageRevenue(col) {
  return totalRevenue(col) / col.length
}
