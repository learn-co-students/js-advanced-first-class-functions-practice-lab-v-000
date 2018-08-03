// Code your solution in this file!

const sayName = function (el){
  console.log(el.name);
};

function logDriverNames(drivers){
  return drivers.forEach(sayName)
}

function logDriversByHometown(drivers, location){
  let newArray = drivers.filter(driver=> driver.hometown === location);
  return newArray.forEach(sayName)
}

const comparator1 = function (a, b){
  return a.revenue - b.revenue;
};

const driversByRevenue = function (drivers){
  return drivers.slice().sort(comparator1);
}

const comparator2 = function (a,b){
    return a.name.localeCompare(b.name);
};

const driversByName = function (drivers){
  return drivers.slice().sort(comparator2);
}

const addRev = function(agg, el){
  return agg + el.revenue;
}

const totalRevenue = function (drivers){
  return drivers.reduce(addRev, 0);
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length
}
