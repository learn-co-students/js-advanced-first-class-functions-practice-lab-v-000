// Code your solution in this file!
const logDriverNames = function (driversArray) {
  driversArray.forEach(function (el, i, array) {
    console.log(el["name"]);
  })
}

const logDriversByHometown = function (driversArray, hometown) {
  const nameArray = driversArray.filter( function (element) {
    return element["hometown"].toLowerCase() === hometown.toLowerCase()
  }
)
debugger;
logDriverNames(nameArray);
}

const driversByRevenue = function (driversArray) {
  const newDriversArray = [...driversArray];
  newDriversArray.sort( function(a, b) {
    return a["revenue"] - b["revenue"];
  })
  return newDriversArray;
}

const driversByName = function (driversArray) {
  const newDriversArray = [...driversArray];
  return newDriversArray.sort( function(a,b) { return a["name"].localeCompare(b["name"])})
}

const totalRevenue = function (driversArray) {
  return driversArray.reduce(function (accumulator, driver) {
    return accumulator + driver["revenue"];
  }, 0)
}

const averageRevenue = function (driversArray) {
  return totalRevenue(driversArray)/driversArray.length;
}
