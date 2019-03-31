// Code your solution in this file!

function logDriverNames(arr){
  arr.forEach(el => console.log(el.name));
}

function logDriversByHometown(arr, home){

  arr.forEach(function(el){
    if (el.hometown === home){
    console.log(el.name);
  }
  });
}

function driversByRevenue(arr){
  let newArr = [...arr];
  return newArr.sort((a,b) => a.revenue - b.revenue );
}

function driversByName(arr){
  let newArr = [...arr];
  return newArr.sort(function(a,b){
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if(nameA < nameB){
    return -1 ;
  } if (nameA > nameB) {
    return 1;
  }

  return 0;
  });
  }

function totalRevenue(arr){
  const reducer = ((accumulator, currentValue) => accumulator + currentValue.revenue );

 return arr.reduce(reducer,0);

}

function averageRevenue(arr){
  const reducer = ((accumulator, currentValue, i, arr) => accumulator + currentValue.revenue / arr.length );

 return arr.reduce(reducer,0);
}
