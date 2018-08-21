function solution(A) {
    max_temp = 0;
    max_sum = -2147483648;
    for (var i = 0; i < A.length; i++) {
        max_temp = Math.max(A[i], max_temp + A[i])
        max_sum = Math.max(max_temp, max_sum)
    }
    return max_sum
}
