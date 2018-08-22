function solution(A) {
    if (JSON.stringify(A.sort()) === JSON.stringify([...Array(A.length + 1).keys()].slice(1))) {
        return 1
    }
    return 0
}
