function logDriverNames(list){
  list.forEach(function(el){
    console.log(el.name);
  });
};

function logDriversByHometown(list, location){
  list.forEach(function(el){
    if (el.hometown === location){
      console.log(el.name);
    };
  });
};

function driversByRevenue(list){
  return [...list].sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

function driversByName(list){
  return [...list].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(list){
  const totalRev = function (agg, el, i, arr){
    return agg += el.revenue;
  };
  return list.reduce(totalRev, 0);
};

function averageRevenue(list){
  return totalRevenue(list) / list.length;
};
