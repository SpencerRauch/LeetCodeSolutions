class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
    }

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        return this.head == undefined;
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        let node = new Node(value);
        let runner = this.head
        if (this.head == undefined){
            this.head = node;
        }
        else{
            while(runner.next){
                runner = runner.next
            }
            runner.next = node;
        }

    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        /* Your Code Here */
        for (let val of arr){
            this.PushBack(val)
        }
    }
    PushFront(value)
	{
		let node = new Node(value)
        node.next = this.head;
        this.head = node;
	}

	/* Remove and return the first node in the list, */
	/* but also set the head to be the next node */
	PopFront()
	{
        node = this.head
        if (this.head !== undefined){
            this.head = this.head.next
        } 
        return node;
            
	}

	/* Calculate and return the average of all the node values in the list. */
	Average()
	{
		let sum = 0;
        let count = 0;
        let runner = this.head;
        if (!runner) return 0;
        while(runner){
            count++
            sum += runner.value
            runner = runner.next
        }
        return (sum / count);
	}
    Contains(value){
        for(let node=this.head;node;node=node.next){
            if(node.value==value){
                return true;
            }
        }
        return false;
    }

    ContainsRecursive(node,value){
        if(node==undefined){
            return false;
        }
        if(node.value==value){
            return true;
        }
        return this.ContainsRecursive(node.next,value);      
    }

    PopBack()
    {
        let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.next == undefined) return this.PopFront();
        while(runner.next.next){
            runner = runner.next
        }
        let node = runner.next;
        runner.next = undefined;
        return node;
    }
    MaxRecursive(node){
        if(node==undefined){
            return undefined;
        }
        if(node.next==undefined){
            return node.value;
        }
        let max = this.MaxRecursive(node.next);
        if(node.value>max){
            return node.value;
        }
        return max;
    }
    /* Return the second to last node's value in the list */
	SecondToLast()
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.next == undefined) return undefined; //Maybe return this.head.value?

        while(runner.next.next){
            runner = runner.next
        }
        return runner.value;
	}

	/* Remove a node whose value matches the given value */
	/* ( You will need to fix .next pointers too! ) */
	RemoveValue(value)
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.value == value) return this.PopFront();
        while(runner.next){
            if (runner.next.value == value){
                runner.next = runner.next.next;
                return;
            }
            runner = runner.next;
        }
        return undefined;
	}

	/* Inserts a new node before a node whose value is the search_value. */
	/* Example: */
	/*
		Before:
		10
		30
		40
		Prepend(20,30)
		After:
		10
		20
		30
		40
	*/
	Prepend(new_value,search_value)
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.value == search_value) {
            this.PushFront(new_value);
            return;
        }
        while(runner.next){
            if (runner.next.value == search_value){
                let node = new Node(new_value);
                node.next = runner.next;
                runner.next = node;
                return;
            }
            runner = runner.next;
        }
        return undefined;
	}

    

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }
};

/* Creates our list */
let list=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([111,222,333,444,555,666]);

console.log(list.SecondToLast()) /* Expected: 555 */

list.RemoveValue(333); /* No Output */

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
	Expected Output after RemoveValue(333):
	111
	222
		<-- this was 333
	444
	555
	666
*/

list.Prepend(333,444);

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
	Expected Output after Prepend(333,444):
	111
	222
	333 <- 333 should be back
	444
	555
	*/