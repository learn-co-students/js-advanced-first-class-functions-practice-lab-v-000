// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(x => console.log(x.name))
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach((x) => {
    if(hometown === x.hometown) {
      console.log(x.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newArr = drivers.slice();
  let sorted = newArr.sort((x, y) => x.revenue - y.revenue)
  return sorted.map(x => x)
}

function driversByName(drivers, name) {
  let newArr = drivers.slice();
  return newArr.sort((x,y) => y.name < x.name )
}

function totalRevenue(drivers) {
  let reduced = drivers.reduce((x,y) => ({revenue: x.revenue + y.revenue}))
  return reduced.revenue
}

function averageRevenue(drivers) {
  let reduced = drivers.reduce((x,y) => ({revenue: x.revenue + y.revenue}))
  let avg = reduced.revenue / (drivers.length)
  return avg
}
