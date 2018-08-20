function solution(X, A) {
    
    for (var i in A) {
        if (Array.from(new Set(A.slice(0,i+1))).length === X) {
            return parseInt(i)
        }
    }
    return -1
}
