function solution(A) {
    max_profit = 0
    max_temp = 0
    for (var i = 0; i < A.length-1; i++) {
        max_temp = Math.max(0, max_temp + A[i+1] - A[i])
        max_profit = Math.max(max_temp, max_profit)
    }
    return max_profit
}
