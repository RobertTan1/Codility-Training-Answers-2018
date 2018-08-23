function solution(X, A) {
    counter = [1].concat(new Array(X).fill(0))
    for (var i = 0; i< A.length; i++) {
        counter[A[i]]++
        if (counter.indexOf(0) == -1) {
            return i
        }
    }
    return -1
}
