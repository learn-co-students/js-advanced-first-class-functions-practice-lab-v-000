// Code your solution in this file!
const logDriverNames = (drivers) => drivers.forEach(driver => console.log(driver.name))

const logDriversByHometown = (drivers, town) => logDriverNames(drivers.filter(driver => driver.hometown === town))

const driversByRevenue = (drivers) => [...drivers].sort((a,b)=> a.revenue - b.revenue)

const driversByName = (drivers) => [...drivers].sort((a,b)=> a.name.localeCompare(b.name))

const totalRevenue = (drivers) => drivers.reduce((total, current) => current.revenue + total, 0)

const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length
