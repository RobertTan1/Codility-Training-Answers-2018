function solution(A, B) {
    for (var i =0; i < A.length-1; i++) {
        if (B[i] == 1 && B[i+1] == 0) {
                if (A[i] > A[i+1]) {
                    A.splice(i+1,1)
                    B.splice(i+1,1)
                } else {
                    A.splice(i,1)
                    B.splice(i,1)
                }
                i=i-2
            }
        }
    return A.length
}
