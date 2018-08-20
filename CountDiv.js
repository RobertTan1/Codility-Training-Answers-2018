function solution(A, B, K) {
    count = 0
    count += ((B-A)-((B-A) % K))/K
    
    if (A % K == 0 || B % K == 0) {
        count++
    }
    
    return count
}
