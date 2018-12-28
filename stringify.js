const stringify = function (agg, el, i, arr) {
  let stringifiedElement = el.name + ' is $' + el.revenue + '. ';
  if (i === arr.length - 1) {
    stringifiedElement += 'The total revenue is $' + (agg.totalRevenue + el.revenue) + '.';
    return agg.string + stringifiedElement;
  }
  return {
    string: agg.string + stringifiedElement,
    totalRevenue: agg.totalRevenue + el.revenue
  };
};
function totalRevenue(drivers) {
  drivers.reduce(stringify, { string: '', totalRevenue: 0 });
}
