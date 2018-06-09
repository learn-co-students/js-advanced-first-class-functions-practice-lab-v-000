function logDriverNames(drivers){
  for (const obj of drivers){
    console.log(obj.name)
  }
}

function logDriversByHometown(drivers, hometown){
  for (const obj of drivers){
    if (obj.hometown == hometown){
      console.log(obj.name);
    }
  }
}

function driversByRevenue(drivers){
  let driversCopy = drivers.slice();
  return driversCopy.sort(function (num1, num2){
    return num1.revenue - num2.revenue;
  });
}

function driversByName(drivers){
  let driversCopy = drivers.slice();
  return driversCopy.sort(function (num1, num2){
    return num1.name.localeCompare(num2.name);
  });
}

function totalRevenue(drivers){
  let revenueArray = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for (const obj of drivers){
    revenueArray.push(obj.revenue);
  };

  return revenueArray.reduce(reducer);
}

function averageRevenue(drivers){
  let total = totalRevenue(drivers);
  return total / drivers.length;
}
