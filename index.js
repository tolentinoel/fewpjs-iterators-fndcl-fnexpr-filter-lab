// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(d =>
        d.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string){
    return drivers.filter(d =>
        d.charAt(0) === string.charAt(0) && d.charAt(1) === string.charAt(1)
        )
}

function matchName(drivers, string){
    return drivers.filter(d =>
        d.name === string)
}