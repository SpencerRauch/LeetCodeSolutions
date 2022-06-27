class MinHeap
{
	constructor()
	{
		this.data=[null,10,40,20,60,50,30,70];
	}

	/* Description: Inserts a value into the heap, maintaining order. */
	/* Instructions: */
		/* 1. push the value to the end of the array.*/
		/* 2. Iteratively swap the new number with its parent value while it is */
		/* smaller than it's parent. */
	/* Time: O(log n) */
	/* Space: O(1) */
	Insert(value)
	{
		this.data.push(value);
        let i=this.data.length-1;
        while(i>1 && this.data[i]<this.data[Math.floor(i/2)])
        {
            let temp=this.data[i];
            this.data[i]=this.data[Math.floor(i/2)];
            this.data[Math.floor(i/2)]=temp;
            i=Math.floor(i/2);
        }
        
    }


	/* Description: Returns the smallest value in the heap without removing it. */
	/* Time: O(1) */
	/* Space: O(1) */
	Min()
	{
		return this.data[1];
	}

	Log()
	{
		let fmt="";
		let len=this.data.length-1;
		let tabs=0;
		for(;len;len>>=1,tabs++){}
		for(let i=1;i<this.data.length;i<<=1,tabs--)
		{
			let to=(i<<1)-1;

			for(let j=0;j<to;j++)
			{

			}
		}
		console.log(fmt);
	}
};

let heap=new MinHeap();
heap.Insert(5);
heap.Log(); /* Expected: 5,10,40,20,60,50,30,70 */
console.log(heap.Min()); /* Expected: 5 */
