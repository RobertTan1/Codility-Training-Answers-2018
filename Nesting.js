function solution(S) {
    S = S.split("")
    counts = [0];
    for (var i = 0; i < S.length; i++) {
        if (S[i] =="(") {
            counts.push(1)
        } else {
            counts.pop()
            if (counts.length == 0) {
                return 0
            }
        }
    }
    if (counts.length == 1) {
        return 1
    }
    return 0
}

// Slow solution, previous
function solution(S) {
    S = S.split("")
    runCount = 0
    for (var i in S) {
        if (S[i] == "(") {
            runCount++
        } else {
            runCount--
        }
        if (runCount < 0) {
            return 0
        }
    }
    if (runCount == 0) {
        return 1
    }
    return 0
}
