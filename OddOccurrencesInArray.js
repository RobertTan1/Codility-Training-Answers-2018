// Slow solution - O(N^2), without doing bitwise comparison bullshit

function solution(A) {
    counts = Array(Math.max.apply(Math,A)+1).fill(false)
    for (var i in A) {
        counts[A[i]] = !counts[A[i]]
    }
    return counts.indexOf(true)
}
