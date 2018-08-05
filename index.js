// Code your solution in this file!

const logDriverNames = function (drivers) {
  (drivers).forEach(function (driver){
  console.log(driver.name)
  });
};

const logDriversByHometown = function (drivers, hometown) {
  (drivers).forEach(function (driver){
  if (driver.hometown === hometown){
    console.log(driver.name)
  };
  });
};

const driversByRevenue = function (drivers){
  return drivers.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  });
};

const driversByName = function (drivers){
  return drivers.slice().sort(function (driverA, driverB) {
      return driverA.name.localeCompare(driverB.name);
  })
  };

  const totalRevenue = function (drivers){
    let totalPrice = 0;

   drivers.forEach(function (driver) {
     totalPrice += driver.revenue;
   });

   return totalPrice;
 };

 const averageRevenue = function (drivers) {
   let totalPrice = 0;

  drivers.forEach(function (driver) {
    totalPrice += driver.revenue;
  });

  return totalPrice/drivers.length;
 }
