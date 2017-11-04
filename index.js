const logDriverNames = (driver) => {
  driver.forEach( (each) => {
    console.log(each.name);
  });
}

const logDriversByHometown = (driver, location) => {
  driver.forEach( (each) => {
    if (each.hometown === location) {
      console.log(each.name);
    }
  });
}

const driversByRevenue = (driver) => {
  return driver.slice().sort( (a, b) => {
    return a.revenue - b.revenue;
  });
}

const driversByName = (driver) => {
  return driver.slice().sort( (a, b) => {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = (driver) => {
  return driver.reduce( (total, a) => {
    return total + a.revenue;
  }, 0);
}

const averageRevenue = (driver) => {
  return totalRevenue(driver) / driver.length;
}