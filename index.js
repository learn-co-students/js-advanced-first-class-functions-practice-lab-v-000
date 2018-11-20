// Code your solution in this file!

const logDriverNames = function (array) {
    array.forEach(function(el, i, arr) {
        console.log(el.name);
    })
}

const logDriversByHometown = function (array, klarg) { 
    let filteredArray = array.filter(x => x.hometown === klarg);

    logDriverNames(filteredArray);
}

const driversByRevenue = function (array) {
   let sortedArray = [...array];

   return sortedArray.sort(function(num1, num2) {
       return num1.revenue - num2.revenue;
   });
}

const driversByName = function (array) {
    let sortedArray = [...array];
    // array.splice... instead of dual-declarations for all above.
    return sortedArray.sort(function(el1, el2) {
        return el1.name.localeCompare(el2.name);
    });
}

const totalRevenue = function (array) {
    let totalPrice = 0;
    array.forEach(function(d) {
        totalPrice += d.revenue
    });

    return totalPrice;
}

const averageRevenue = function (array) {
    let total = totalRevenue(array);

    return total/array.length;
}