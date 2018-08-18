function solution(A) {
    B = Array.from(new Set(A)).sort()
    if (B[B.length-1] == B.length && B.length == A.length && B[0] == 1) {
        return 1
    } else {
        return 0
    }
}
