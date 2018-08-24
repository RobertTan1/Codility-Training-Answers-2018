function solution(A) {
    zeroCount = 0
    crossCount = 0
    for (var i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            zeroCount++
        } else {
            crossCount += zeroCount
        }
    }
    if (crossCount > 1000000000) {
        return -1
    }
    return crossCount
} 

// Slow solution
function solution(A) {
    count = 0;
    
    for (var i in A) {
        if (A[i] == 1) {
            count += A.slice(0,i).reduce(function(n, val) {
                return n + (val === 0);
            }, 0);
        }
    }
    
    if (count > 1000000000) {
        return -1
    } else {
        return count
    }
}
