// Code your solution here
function findMatching(list, name){
    return list.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(list, name) {
    let length = name.length;
    return list.filter(function (driverName) {
        return driverName.slice(0, length) === name;
    })
}

function matchName(list, name) {
    return list.filter(function(driverName) {
        return driverName.name.toLowerCase() === name.toLowerCase();
    })
}