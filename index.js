// Code your solution in this file!

function callback(el) {
  console.log(el.name);
};

function aCallback(el) {
  console.log("top");
  console.log(el.hometown);
  console.log("bottom");
};

const logDriverNames = function(drivers){drivers.forEach(callback)};

const logDriversByHometown = function(drivers,hometown){drivers.forEach(aCallback)};
