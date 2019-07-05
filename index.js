// Code your solution in this file!

const logDriverNames = function(array) {
  for (const person of array) {
    console.log(person.name);
  }
}

const logDriversByHometown = function(array, town) {
  for (const person of array) {
    if (person.hometown === town) {
      console.log(person.name);
    }
  }
}

const driversByRevenue = function(array) {
  return [...array].sort(function(a,b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(array) {
  return [...array].sort(function(a,b) {
    const aName = a.name;
    const bName = b.name;
    return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
  });
}

const totalRevenue = function(array) {
  total = 0;
  for (const person of array) {
    total += person.revenue;
  }
  return total;
}

const averageRevenue = function(array) {
  total = 0;
  for (const person of array) {
    total += person.revenue;
  }
  return total / array.length;
}