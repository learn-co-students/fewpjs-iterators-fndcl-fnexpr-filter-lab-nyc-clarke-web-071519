// Code your solution here
function findMatching(driverarr, str){
    return driverarr.filter(driver => {
        return driver.toUpperCase() === str.toUpperCase()
    })
}

// findMatching(['hello', 'goodbye'], 'hello')

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(x => {
        return x.charAt() === string.charAt();
    })
}

function matchName(drivers, str){
    return drivers.filter(driver => {
        return driver.name.toUpperCase() === str.toUpperCase()
    })

}

