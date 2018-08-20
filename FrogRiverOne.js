function solution(X, A) {
    
    if (A.length == 1) {
        return -1
    }
    
    for (var i in A) {
        if (Array.from(new Set(A.slice(0,i))).length === X) {
            return parseInt(i-1)
        }
    }
    return -1
}
