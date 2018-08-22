function solution(A) {
    return Array.from(new Set(A.map(Math.abs))).length
}
