const logDriverNames = function (array) {
array.forEach(sayName)
}


function sayName(object) {console.log(object.name)}


const logDriversByHometown = function (array, town) {

  for (const element of array) {checkTown(element, town)}
}

function checkTown(object, town) {
  if (object.hometown === town)
  {sayName(object)}
}


const driversByRevenue = function (array)
{ new_array = Object.assign([],array)
  return new_array.sort(numberSorter)
  }

   function numberSorter(obj1, obj2) {
    return obj1.revenue - obj2.revenue;
  }

const driversByName = function (array)
{ new_array = Object.assign([],array)
  return new_array.sort(nameSorter)

}

function nameSorter(obj1,obj2) {
  return getName(obj1).localeCompare(getName(obj2))
}

function getName(object) {
  return object.name;
}

const totalRevenue = function (array) {
  let total = 0;

  array.forEach(function (element) {total += element.revenue})
  return total;
}

const averageRevenue = function (array) {
  return totalRevenue(array)/array.length;

}
