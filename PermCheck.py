def solution(A):
    if set(A) == set(range(1, 1+len(A))):
        return 1
    else:
        return 0

# For some reason the javascript version gives only 75% score while being conceptually the same
""""
function solution(A) {
    trueLen = Array.from(new Set(A)).length + 1
    if (JSON.stringify(Array.from(new Set(A)).sort()) === JSON.stringify([...Array(trueLen).keys()].slice(1))) {
        return 1
    }
    return 0
}
""""
