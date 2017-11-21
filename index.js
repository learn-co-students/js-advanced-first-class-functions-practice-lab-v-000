// Code your solution in this file!

function logDriverNames(array) {
  array.forEach(function (element) {
	   console.log(element.name)
 })
}

function logDriversByHometown(array, hometown) {
  array.filter(function(element) {
    return element.hometown === hometown
  }).forEach(function(element){
    console.log(element.name)
  })
}

function driversByRevenue(array) {
  return array.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  })
};

function driversByName(array) {
  return array.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array) {
  return array.reduce(function (sum, el) {
    return sum + el.revenue }, 0)
  }

function averageRevenue(array) {
  return totalRevenue(array)/array.length
};
