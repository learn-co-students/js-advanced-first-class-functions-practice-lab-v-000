// Code your solution in this file!
function logDriverNames(driver) {
  /*Receives an array of `driver` objects and logs the `name` attribute of each `driver` to the console. */
    driver.forEach(function(element){
      console.log(element.name)
    })
}
function logDriversByHometown(driver, location){
  /*— Receives an array of `driver` objects as the first argument and a location as the second argument. The function
  logs to the console the `name` attribute of each `driver` whose hometown matches the string passed in as the 'location' argument.*/
  driver.forEach(function(element){
    if(element.hometown === location)
      console.log(element.name)
  })
}
function driversByRevenue(driver){
  /* — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `revenue` attribute from lowest to highest.*/
  const new_ar = [...driver]
  return new_ar.sort(function(a,b){
    return a.revenue > b.revenue
  })
}
function driversByName(driver){
  /* — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `name` attribute from A to Z.
  Here, you may have to use the [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method.*/
  const new_ar = [...driver]
  return new_ar.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}
function totalRevenue(driver){
  /*` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.*/
  return driver.reduce(function(agg, el){
    return agg + el.revenue
  }, 0)
}
function averageRevenue(driver){
  /* — Receives an array of `driver` objects and returns the average revenue earned by each driver. */
  return driver.reduce(function(agg, el, i, arr){
    if(arr.length - 1 === i)
      return (agg + el.revenue) / (i + 1)

    return agg + el.revenue
  }, 0)
}
