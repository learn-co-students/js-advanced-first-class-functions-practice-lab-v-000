// Code your solution in this file!
function logDriverNames(array) {
  return array.forEach( d => {
    console.log(d.name);
  });
};

function logDriversByHometown(array, location) {
  return array.forEach( d => {
     if (d.hometown === location) {
      console.log(d.name);
    };
  });
};

function driversByRevenue(array) {
  return array.slice().sort( function(a, b) { return parseFloat(a.revenue) - parseFloat(b.revenue) } );
};

function driversByName(array) {
  return array.slice().sort( function(a, b) { return a.name.localeCompare(b.name) } );
};

function totalRevenue(array) {
  return array.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue.revenue, 0 );
};

function averageRevenue(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.revenue, 0 );
    return sum/array.length;
};
