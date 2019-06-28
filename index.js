const callback1 = function (driver) {
	console.log(driver.name);}

function logDriverNames(array) {return array.forEach(callback1);};



const logDriversByHometown = function (array, hometown) {
  array.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)}
    })
  }

const driversByRevenue = function (array) {
  let newArray = array.slice().sort(function(a, b) {
	   return a.revenue - b.revenue;
    }
  );
  return newArray;
};

const driversByName = function (array) {
  let newArray = array.slice().sort(function(a, b) {
      const nameA = a.name
      const nameB = b.name
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
  });
  return newArray;
};

const totalRevenue = function (array) {
  return array.reduce(function (agg, el) {
    return agg + el.revenue;
  }, 0);
};

const averageRevenue = function (array) {
  return array.reduce(function (agg, driver, index, array) {
    agg += driver.revenue;
    if (index === array.length-1) {
      return agg/array.length;
    }else {
      return agg;
    };
  }, 0);
};


// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if( index === array.length-1) {
//     return total/array.length;
//   }else {
//     return total;
//   }
// });
