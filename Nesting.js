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
