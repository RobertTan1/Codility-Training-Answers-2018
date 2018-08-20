// Slow solution - O(N^2)

function solution(A) {
    var unique = Array.from(new Set (A))
    for (var i in unique) {

        var indexes = []
        
        for (var j in A) {
            
            if (unique[i] == A[j]) {
                indexes.push(j)
            }
            
        }
        
        if ((indexes.length % 2) == 1) {
            return(A[indexes[0]])
        }
        
    }
}
