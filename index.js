function logDriverNames(array) {
  array.forEach(function(el) {
    console.log(el.name)
  })
}

 function logDriversByHometown(array, hometown) {
   array.forEach(function(el) {
     if (el.hometown === hometown) {
       console.log(el.name);
     };
   })
 }


const driversByRevenue = function(array) {
  const sorted = array.slice().sort(function(a,b) {
    return a.revenue - b.revenue
  });
  return sorted
}

const driversByName = function(array) {
  const sorted = array.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name)
  });
  return sorted;
}

/*const totalRevenue = function(array) {
  return array.reduce(function(agg,el,i,arr) {return agg + el.revenue;}, 0)}*/

const reduceRevenues = function (agg,el,i,arr) {
  return agg + el.revenue;
}

const totalRevenue = function(array) {
  return array.reduce(reduceRevenues, 0)
}

const averageRevenue = function(array) {
  return totalRevenue(array)/array.length
}
