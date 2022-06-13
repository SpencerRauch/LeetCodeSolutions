class BSTNode
{
	constructor(value)
	{
		this.left=undefined;
		this.right=undefined;
		this.value=value;
	}
};

class BST
{
	constructor()
	{
		this.root=undefined;
	}

	/* Time Complexity:  O(1) */
	/* Space Complexity: O(1) */
	/* Determine whether the BST is empty */
	IsEmpty()
	{
		return this.root==undefined;
	}

	/* Time Complexity:  O(N) */
	/* Space Complexity: O(1) */
	/* Find the smallest number in the BST */
	MinR(node)
	{
		/* Your Code Here */
		/* Call me recursively */
        if (node.left == undefined) {
            return node.value;
        }
        return this.MinR(node.left);

	}

	/* Time Complexity:  O(N) */
	/* Space Complexity: O(1) */
	/* Find the largest number in the BST */
	MaxR(node)
	{
		/* Your Code Here */
		/* Call me recursively */
        if (node.right == undefined) {
            return node.value;
        }
        return this.MaxR(node.right);
	}

	/* I'm just here to print your BST In-Order. */
	/* Could use me as an example to solve above algos, since I'm recursive and all. */
	Log(node,fmt="")
	{
		if(!node) return fmt;
		fmt=this.Log(node.left,fmt);
		fmt+=node.value+"->";
		fmt=this.Log(node.right,fmt);
		return fmt;
	}
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();
console.log(bst.IsEmpty()) 			/* Expected: true */

bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.right=new BSTNode(150);

bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);

bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

// console.log(bst.Log(bst.root)); /* Uncomment me if you want to see your tree */
console.log(bst.IsEmpty()) 		   /* Expected: false */
console.log(bst.MinR(bst.root));   /* Expected: 25 */
console.log(bst.MaxR(bst.root));   /* Expected: 175 */