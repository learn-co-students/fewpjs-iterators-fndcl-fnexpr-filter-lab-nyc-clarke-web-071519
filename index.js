const findMatching = (drivers, string) => {
  return drivers.filter(driver => { 
    return driver.toUpperCase() === string.toUpperCase()
  })
}

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => {
    return driver.charAt() === letters.charAt()
  })
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name === name
  })
}