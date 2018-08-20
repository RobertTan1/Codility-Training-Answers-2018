function solution(A) {
    bigNeg = A.sort(function(a,b){return a - b}).slice(0,2)
    bigPos = A.sort(function(a,b){return a - b}).reverse().slice(0,3)
    
    answer1 = bigNeg[0] * bigNeg[1] * bigPos[0]
    answer2 = bigPos.reduce(function(a, b) {
                    return a * b;
                });
                
    return Math.max(answer1, answer2)
}
