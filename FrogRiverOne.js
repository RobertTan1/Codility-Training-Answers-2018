// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    notFound = true
    searchIndex = A.slice()
    while (notFound) {
        position = searchIndex.indexOf(X)
        B = Array.from(Array(X).keys()).slice(1);
        C = Array.from(new Set(A.slice(0,position)))
        if (B.length <= C.length) {
            notFound = false
            return(position)
        } else {
            searchIndex[position] = 2147483647
        }
    }
}
