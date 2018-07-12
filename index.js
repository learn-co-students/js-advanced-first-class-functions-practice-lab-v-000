// Code your solution in this file!

function logDriverNames(driversArray) {
  driversArray.forEach(function(element){ console.log(element.name);});
};

function logDriversByHometown (driversArray, hometown) {
    driversArray.forEach(
      function (element) {
        if (element.hometown === hometown) {
          console.log(element.name);
        }
      }
    );
  };

function driversByRevenue(driversArray){
  const result = [...driversArray];
  result.sort(
    function(obj1, obj2) {
      return obj1.revenue - obj2.revenue;
    }
  );
  return result;
};

function driversByName(driversArray){
  const result = [...driversArray];
  result.sort(
    function(obj1, obj2) {
      return obj1.name.localeCompare(obj2.name);
    }
  );
return result;
};

function totalRevenue(driversArray) {
  const cb = function (agg, el, i, arr) {
    return agg += el.revenue;
  };
  return driversArray.reduce(cb, 0);
};

function averageRevenue(driversArray) {
  const total =  totalRevenue(driversArray);
  return total / driversArray.length;
};
