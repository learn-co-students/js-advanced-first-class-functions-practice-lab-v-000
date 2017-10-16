// Code your solution in this file!

  const logDriverNames = function(drivers) {
    for (const el of drivers) {
      console.log(el.name)
    }
  }
  const logDriversByHometown = function(drivers, location) {
    for (const el of drivers.filter(driver => driver.hometown === location)) {
      console.log(el.name)
    }
  }

  const driversByRevenue = function(drivers) {
    sorted = drivers.slice().sort(function (a, b) {
      return a.revenue - b.revenue;
    })
    return sorted
  }

  const driversByName = function(drivers) {
    sorted = drivers.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    return sorted
  }

  const totalRevenue = function(drivers) {
    const reduceDriverRevenue = function (agg, el, i, arr) {
      return agg + el.revenue
    }
    return drivers.reduce(reduceDriverRevenue, 0);
  }

  const averageRevenue = function(drivers) {
    const reduceDriverRevenue = function (agg, el, i, arr) {
      return agg + el.revenue
    }
    return (drivers.reduce(reduceDriverRevenue, 0)/drivers.length);
  }
