import {smallArray, midArray, largeArray} from './UnsortedArrays'
import swap from './swapFunc'


// O(n^2) time | O(1) space
function bubbleSort(arr) {
	let isSorted = false;
	let count = 0;
	while(!isSorted) {
		isSorted = true;
		for(let i = 0; i < arr.length - count; i++) { 
		// bring the largest number to the end of the array
			if(arr[i + 1] > arr[i]) {
				swap(arr, i, i + 1);
				isSorted = false;
			}
		}
		
		if(isSorted) { // no changes or swaps were made 
			break;
		}
		count++
	}
	return arr;
}
