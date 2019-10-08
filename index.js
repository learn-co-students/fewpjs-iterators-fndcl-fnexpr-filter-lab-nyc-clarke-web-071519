findMatching = (driverArr, driverString) => {
  let matchedArr = driverArr.filter(driver => {
    return driver.toLowerCase() === driverString.toLowerCase();
  });
  return matchedArr;
};

function fuzzyMatch(driverArr, driverString) {
  let matchedArr = driverArr.filter(driver => {
    return driver[0] === driverString[0];
  });
  return matchedArr;
}

function matchName(driverArr, driverString) {
  let matchedArr = driverArr.filter(driver => {
    return driverString === driver.name;
  });
  return matchedArr;
}
