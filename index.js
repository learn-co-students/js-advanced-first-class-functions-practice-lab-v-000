// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(callback)
}

const callback = function (e) {
  console.log(e.name)
}

function logDriversByHometown(drivers, city) {
  for (const element of drivers) {
    if (element.hometown === city) {
      console.log(element.name)
    }
  }
}
