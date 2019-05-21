// Code your solution in this file!
const logDriverNames = function(array)
{
  array.forEach(function(el, i, arr)
{
  console.log(el["name"])
})
}

const logDriversByHometown = function(array, location)
  {
    array.forEach(function(el, i, arr)
    {
      if (el["hometown"] === location)
        {
          console.log(el["name"])
        }
    })
  }

const driversByRevenue = function(array)
{
  let newArray = [...array]
  return newArray.sort(function(a, b)
{
  return (a["revenue"] - b["revenue"])
})
}

const driversByName = function(array)
{
  let newArray = [...array]
  return newArray.sort(function(a, b)
{
  return (a["name"].charCodeAt(0) - b["name"].charCodeAt(0))
})
}

const totalRevenue = function(array)
{
  return array.reduce(function(acc, el, i, arr)
  {
    return acc + el["revenue"];
  }, 0)
}

const averageRevenue = function(array)
{
  return totalRevenue(array)/array.length
}
