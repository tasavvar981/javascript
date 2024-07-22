function checkPrime(num) {
    if(num<=1)
        return false;

    for (let i = 2; i <= num/2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
checkPrime(4) ? console.log("true"): console.log("false");
checkPrime(5) ? console.log("true"): console.log("false");

