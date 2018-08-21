function solution(N) {
    i = 1
    minPeri = 2**31
    while (i*i <= N) {
        if (N % i == 0) {
            minPeri = Math.min(minPeri, 2*(i + (N/i)))
        }
    i++
    }
    return minPeri
}
