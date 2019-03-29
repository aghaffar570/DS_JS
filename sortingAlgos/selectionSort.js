import swap from './swap'

function selectionSort(arr) {
	for(let i = 0; i < arr.length - 2; i++) {
		let smallIdx = i
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[smallIdx]) {
				smallIdx = j;
			}	
		}
		
		if(smallIdx !== i) {
			swap(arr, i, smallIdx);
		}
	}
	return arr
}	
