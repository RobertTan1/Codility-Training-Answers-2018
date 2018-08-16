function solution(N) {

	binary = (N >>> 0).toString(2).split("").map(Number);

	indexes = []

	for (var i in binary) {
		if (binary[i] == 1) {
			indexes.push(i)
		}
	}

	indexes = indexes.map(Number)

	if (indexes.length < 2) {
		return 0;
	}

	binary = binary.slice(0, Math.max.apply(null, indexes) + 1) differences = []
	
	for (var i = 0; i < indexes.length - 1; i++) {
		differences[i] = Math.abs(indexes[i] - indexes[i + 1]) - 1
	}

	return (Math.max.apply(null, differences))
}