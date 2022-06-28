class MinHeap {
	constructor() {
		this.data = [null, 10, 40, 20, 60, 50, 30, 70,15];
	}

	/* Description: Inserts a value into the heap, maintaining order. */
	/* Instructions: */
	/* 1. push the value to the end of the array.*/
	/* 2. Iteratively swap the new number with its parent value while it is */
	/* smaller than it's parent. */
	/* Time: O(log n) */
	/* Space: O(1) */
	Insert(value) {
		this.data.push(value);
		let i = this.data.length - 1;
		while (i > 1 && this.data[i] < this.data[Math.floor(i / 2)]) {
			let parent = Math.floor(i / 2);
			let temp = this.data[i];
			this.data[i] = this.data[parent];
			this.data[parent] = temp;
			i = Math.floor(i / 2);
		}

	}


	/* Description: Returns the smallest value in the heap without removing it. */
	/* Time: O(1) */
	/* Space: O(1) */
	Min() {
		return this.data[1];
	}

	/* Description: Extracts the min number in the heap and reorders it */
	/* so the next min is ready for extraction */
	/* Time: O(log n) */
	/* Space: O(1) */
	/*
		Instructions:
		1. Save the min.
		2. Pop last num and set it as the first index.
		3. Iteratively swap the old last node that is now at idx1 with it's
		smallest child IF the smallest child is smaller than it.
	*/
	Extract() 
	{
		let min = this.data[1];
		let last = this.data.pop();
		this.data[1] = last;
		let parentIdx = 1;
		while (parentIdx < this.data.length-1) {
			let childA = parentIdx * 2;
			let childB = parentIdx * 2 + 1;
			let smaller = childA;
			if (childA >= this.data.length) {
				break;
			}
			if (childB < this.data.length) {
				if (this.data[childB] < this.data[childA]) {
					smaller = childB;
				}
			}
			if (this.data[smaller] < this.data[parentIdx]) {
				let temp = this.data[smaller];
				this.data[smaller] = this.data[parentIdx];
				this.data[parentIdx] = temp;
				parentIdx = smaller;
			} else {
				break;
			}

		}
		return min;
	}

		Log()
		{
			let fmt = "";
			let len = this.data.length - 1;
			let tabs = 0;
			for (; len; len >>= 1, tabs++) { }
			for (let i = 1; i < this.data.length; i <<= 1, tabs--) {
				let to = (i << 1) - 1;

				for (let j = 0; j < to; j++) {

				}
			}
			console.log(fmt);
		}
	};

	let heap=new MinHeap();
	console.log(heap.Extract()) /* Expected: 10 */
	heap.Log(); /* Expected: 20,40,70,60,50,30 */
	console.log(heap)


