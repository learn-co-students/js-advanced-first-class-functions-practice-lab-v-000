// Code your solution in this file!
function logDriverNames(a_drivers){
    a_drivers.map( (value) => { console.log(value["name"]) } )
}

function logDriversByHometown(a_drivers, hometown){
    for(const driver of a_drivers){
       console.log((driver["hometown"] == hometown) ? driver["name"] : "" )
    }
}
function driversByRevenue(a_drivers){
  let arr = Object.assign([], a_drivers)
  return arr.sort( (a,b) => { return (a["revenue"] < b["revenue"]) ? -1 : ((a["revenue"] > b["revenue"]) ? 1 : 0 )  }  )
}
function driversByName(a_drivers){
    let arr = Object.assign([], a_drivers)
    return arr.sort( (a,b) => { return (a["name"] < b["name"]) ? -1 : ((a["name"] > b["name"]) ? 1 : 0 )  }  )
}
function totalRevenue(a_drivers){
  return a_drivers.reduce( (sum, obj) => { return sum += obj["revenue"]}, 0 )
}
function averageRevenue(a_drivers){
    return a_drivers.reduce( (sum, obj) => { return sum += obj["revenue"]}, 0 ) / a_drivers.length
}
