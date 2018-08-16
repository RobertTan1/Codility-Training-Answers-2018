/* N = any -/+ integer */
function solution(N) {
	
	/* Convert number to binary */
	binary = (N >>> 0).toString(2).split("").map(Number);
	
	indexes = []
	
	/* Note down the index where a "1" appears in "indexes" Array */
	for (var i in binary) {
		if (binary[i] == 1) {
			indexes.push(i)
		}
	}
	
	/* Convert array to numbers*/
	indexes = indexes.map(Number)

	/* Immediately return 0 if indexes is too short */
	if (indexes.length < 2) {
		return 0;
	}
		
	differences = []
	
	/* Calculate the gaps between 1s */
	for (var i = 0; i < indexes.length - 1; i++) {
		differences[i] = Math.abs(indexes[i] - indexes[i + 1]) - 1
	}

	/* Return answer */
	return (Math.max.apply(null, differences))
}
