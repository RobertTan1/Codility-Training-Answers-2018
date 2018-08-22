function solution(M, A) {
    count = 0
    for (var i = 0; i < A.length; i++) {
        front=i
        while (front < A.length) {
            theSlice = A.slice(i, front + 1)
            if (theSlice.length == Array.from(new Set(theSlice)).length) {
                count++; front++;
            } else {
                front++
            }
        }
            
        if (count > 1000000000) {
           return 1000000000
        }
    }
    return count
}
