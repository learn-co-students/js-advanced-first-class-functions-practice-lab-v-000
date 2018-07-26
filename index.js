// Code your solution in this file!
const logDriverNamesCallback = function (el, i, arr){
    console.log(el.name);
};

function logDriverNames(drivers){
    drivers.forEach(logDriverNamesCallback);
};


const logDriversByHometownCallback = function (el, i, arr){
    if (el.hometown === location){
       return console.log(el.name);
    }
};

function logDriversByHometown(drivers,location){
    drivers.forEach(logDriversByHometownCallback);
}
