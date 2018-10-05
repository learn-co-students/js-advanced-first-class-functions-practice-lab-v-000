// Code your solution in this file!
const logDriverNames = function (arrOfDriverObjs){
  arrOfDriverObjs.forEach(
    function (element, index, array){
      console.log(element.name);
    });
};


const matchingDriversByHometown = function (arrOfDriverObjs, town){
  return arrOfDriverObjs.filter(
    function (driverObj){
      return driverObj.hometown === town;
    }
  );
}

const logDriversByHometown = function (arrOfDriverObjs, town){
  matchingDriversByHometown(arrOfDriverObjs, town).forEach(
    function (element, index, array){
      console.log(element.name);
    }
  );
}

const revenueSorter = function(a, b){return a.revenue-b.revenue};


const driversByRevenue = function(arrOfDriverObjs){
  const newArr = arrOfDriverObjs.slice(0);
  return newArr.sort(revenueSorter);
}

const nameSorter = function(a, b){return (a.name).localeCompare(b.name)};

const driversByName = function(arrOfDriverObjs){
  const newArr = arrOfDriverObjs.slice(0);
  return newArr.sort(nameSorter);
}


const totalRevenueCallback = function (currTotal, element, index, array) {
    return currTotal += element.revenue;
  }

const totalRevenue = function(arrOfDriverObjs){
  return arrOfDriverObjs.reduce(totalRevenueCallback, 0);
}

const averageRevenue = function(arrOfDriverObjs){
  return totalRevenue(arrOfDriverObjs) / arrOfDriverObjs.length;
}
