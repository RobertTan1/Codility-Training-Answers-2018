function solution(N) {
    count = 0
    i=1
    while (i * i <= N) {
        if (N % i == 0 ) {
            if (i * i == N) {
                count++
            } else {
                count += 2   
            }
        }
        i++
    }
    return count
}
