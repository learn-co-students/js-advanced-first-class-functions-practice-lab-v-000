const logDriverNames = drivers => {
  for (driver of drivers){
    console.log(driver.name)
  }
}

const logDriversByHometown = (drivers, hometown) => {
  for (driver of drivers){
    if (driver.hometown == hometown){
      console.log(driver.name)
    }
  }
}

const driversByRevenue = drivers => {
  return [...drivers].sort((a, b) => a.revenue - b.revenue)
}

const driversByName = drivers => {
  return [...drivers].sort((a, b) => a.name.localeCompare(b.name))
}

const totalRevenue = drivers => {
  return [...drivers].reduce((agg, el) => agg += el.revenue, 0)
}

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length
}
