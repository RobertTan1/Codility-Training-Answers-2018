function solution(A) {
    B = Array.from(Array(A.length+2).keys()).slice(1)
    C = B.concat(A)
    element = 0 
    for (i of C) {
        element = element^i
    }
    return element
}
