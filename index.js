// Code your solution in this file!
function logDriverNames(array){
  return array.forEach((driver) =>{
    console.log(driver.name)
  })
}

function logDriversByHometown(array, hometown){
  return array.forEach(driver => {
    if(driver.hometown === hometown)
      console.log(driver.name)
  }) 
}

function driversByRevenue(array){
  return array.slice().sort((a,b) => {
    return a.revenue - b.revenue
  })
 
}

function driversByName(array){
  return array.slice().sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array){
  return array.reduce((agg, el)=>{
    return agg + el.revenue
  }, 0)
}

function averageRevenue(array){
  return totalRevenue(array) / array.length
}




