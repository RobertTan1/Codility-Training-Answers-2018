function solution(A) {
    B = []
    
    C = []
    
    A.reduce(function(a,b,i) { return B[i] = a+b; },0);
    
    A.reverse().reduce(function(a,b,i) { return C[i] = a+b; },0);
    
    C.reverse()
    
    console.log(B,C)
    diff = []
    
    for (var i = 0; i< A.length-1;i++) {
        diff[i] = Math.abs(B[i]-C[i+1])
    }

    return Math.min(...diff)
}
