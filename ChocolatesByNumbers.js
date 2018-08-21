// O log(n) Recursive solution
// Divide N by the GCD of N and M and you get the answer
function solution(N, M) {
    function gcd(a,b) {
        if (a % b == 0) {
            return b
        } else {
            return gcd(b, a % b)
        }
    }
    
    theGCD = gcd(N,M)
    
    return N/theGCD
}

// Old Slow answer
continuee = true
    i=0
    record = []
    
    while (continuee) {
        record.push((i * M) % N)
        uniqLen = Array.from(new Set(record)).length
        if(record.length != uniqLen) {
            return uniqLen
        }
        i++
    }
    
