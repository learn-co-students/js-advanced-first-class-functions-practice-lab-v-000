const logDriverNames = drivers => drivers.forEach(driver => {
	console.log(driver.name);
});

const logDriversByHometown = (drivers, hometown) => drivers.forEach((driver) => {
	if (driver.hometown === hometown) {
		console.log(driver.name);
	}
})

const driversByRevenue = drivers => [...drivers].sort(
	(a,b) => a.revenue - b.revenue
)

const driversByName = drivers => [...drivers].sort(
	(a,b) => a.name.localeCompare(b.name)
)

const totalRevenue = drivers => drivers.reduce(
	(x, driver) => x + driver.revenue, 0
)

const averageRevenue = drivers => drivers.reduce(
	(x, driver) => x + (driver.revenue / drivers.length), 0
)