// Code your solution in this file!
function logDriverNames(drivers) {
  for(element of drivers) {
    console.log(element.name);
  }
}

function logDriversByHometown(drivers, hometown) {
   for(element of drivers) {
     if (element.hometown === hometown) {
        console.log(element.name);
     };
   };
}

function driversByRevenue(drivers) {
  const dr = drivers.slice().sort( function (a,b) { return a.revenue - b.revenue; });
  return dr;
}

function driversByName(drivers) {
   const byName = drivers.slice().sort( function (a,b) { return a.name.localeCompare(b.name); } );
   return byName;
}

function totalRevenue(drivers) {
   const revenues = [];
   for(element of drivers) {
     revenues.push(element.revenue);
   };
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return revenues.reduce(reducer);
}

function averageRevenue(drivers) {
   const ave = totalRevenue(drivers) / drivers.length;
   return ave;
}
