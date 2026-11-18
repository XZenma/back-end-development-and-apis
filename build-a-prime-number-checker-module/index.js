function isPrime(number) {
    if (
        number <= 1 ||
        (number % 2 == 0 && number != 2) || 
        (number % 3 == 0 && number != 3) ||
        (number % 5 == 0 && number != 5)
    ) {
        return false
    } 
    
    if (number <= 3) {
        return true
    }

    const limit = Math.sqrt(number)
    for (let i = 5; i <= limit; i += 6) {
        if ((number % i == 0) || (number % (i + 2) == 0)) {
            return false
        }
    }

    return true
}

module.exports = {
    isPrime: isPrime
}