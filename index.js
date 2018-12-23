// Code your solution in this file!

const logDriverNames = function (arr) {
  return arr.forEach(function (el) {
    console.log(el.name)
  })
}

const logDriversByHometown = function (driversArr, city) {
  return driversArr.forEach(function (el) {
    if (el.hometown === city) {
      console.log(el.name)
    }
  })
}

const driversByRevenue = function (arr) {
  return [...arr].sort(function (a, b) {
      return a.revenue > b.revenue
  })
}

const driversByName = function (arr) {
  return [...arr].sort(function (a, b) {
      return a.name > b.name
  })
}

const revenueSum = function (agg, el, i, arr) {
  return agg + el.revenue
}

const totalRevenue = function (arr) {
  return arr.reduce(revenueSum, 0)
}

const averageRevenue = function (arr) {
  return totalRevenue(arr) / arr.length
}
