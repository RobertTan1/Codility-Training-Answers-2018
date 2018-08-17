function solution(A, K) {
    /* Return modal to simplify the K */
    K = K % A.length
    /* Start logic loop, exit if K == 0 */
    if (K == 0) {
        return A
    } else {
        /* add the ending to the beginning */
        A = A.slice(-K).concat(A)
        /* cut out the ending */
        A.splice(-K)
        return A
    }
}
