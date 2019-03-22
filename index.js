function logDriverNames(drivers) {
  drivers.forEach( function (element) {
    console.log(element.name);
  });
}


function logDriversByHometown(drivers, hometown) {
  const hometownNames = function(el) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  }
  drivers.forEach(hometownNames);
}

function driversByRevenue(drivers) {

  function compare(a,b) {
    if (a.revenue < b.revenue)
      return -1;
    if (a.revenue > b.revenue)
      return 1;
    return 0;
  }

  return drivers.slice().sort(compare)
}

function driversByName(drivers) {

  function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  return drivers.slice().sort(compare)
}


function totalRevenue(drivers) {
  const amount = (item) => item.revenue;
  const sum = (prev, next) => prev + next;
  return drivers.map(amount).reduce(sum);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
