function isMinnesotaZip(code) {
    // minnesota zip codes are between 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(6899988))
console.log(isMinnesotaZip('55898')) // it will try to make it work without having to convert string to number




