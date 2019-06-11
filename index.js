// Code your solution in this file!


const logDriverNames = (drivers) => {
  drivers.forEach(x => console.log(x.name))
}

const logDriversByHometown = (drivers, hometown) => {
  const matches = drivers.filter(x => x.hometown === hometown)
  matches.forEach(x => console.log(x.name))
}

const driversByRevenue = (drivers) => {
  const sorted = [...drivers]
  sorted.sort((a,b) => {return a.revenue > b.revenue})
  return sorted
}

const driversByName = (drivers) => {
  const sorted = [...drivers]
  sorted.sort((a,b) => {return a.name > b.name})
  return sorted
}

const totalRevenue = (drivers) => {
  const reducer = (counter, x) => {
  return counter + x.revenue;
};
  return drivers.reduce(reducer, 0);
}

const averageRevenue = (drivers) => {
  const reducer = (counter, x) => {
  return counter + x.revenue / drivers.length;
};
  return drivers.reduce(reducer, 0);
}
