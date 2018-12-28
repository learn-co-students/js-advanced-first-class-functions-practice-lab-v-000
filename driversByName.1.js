function driversByName(drivers) {
  let driversCopy = [...drivers];
  return driversCopy.sort((a, b) => {
    return a.localeCompare(b);
  });
}
