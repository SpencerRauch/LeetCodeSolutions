class BSTNode {
	constructor(value) {
		this.left = undefined;
		this.right = undefined;
		this.value = value;
	}
};

class BST {
	constructor() {
		this.root = undefined;
	}

	/* Time Complexity:  O(1) */
	/* Space Complexity: O(1) */
	/* Determine whether the BST is empty */
	IsEmpty() {
		return this.root == undefined;
	}

	/* Time Complexity:  O(N) */
	/* Space Complexity: O(1) */
	/* Find the smallest number in the BST */
	MinR(node) {
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
	MaxR(node) {
		/* Your Code Here */
		/* Call me recursively */
		if (node.right == undefined) {
			return node.value;
		}
		return this.MaxR(node.right);
	}
	Contains(value) {
		if (this.IsEmpty()) return false; //if the tree is empty, return false
		let node = this.root; //else, set the node to the root
		while (node) { //while the node exists
			if (node.value == value) return true; //if the value is found, return true
			if (value < node.value) { //if the value is less than the current node, check the left subtree
				node = node.left;
			}
			else { //else, check the right subtree
				node = node.right;
			}
		}
		return false; //if the node doesn't exist, return false

	}

	/* Worst Time Complexity:  O(N) */
	/* Average Time Complexity: O(log N) */
	/* Best Time Complexity: O(1) */
	/* Space Complexity: O(1) */
	/* Determine whether the given value exists within the tree RECURSIVELY */
	ContainsRecursive(value, node = this.root) {
		if (this.IsEmpty()) return false; //if the tree is empty, return false
		if (node.value == value) return true; //if the value is found, return true
		if (value < node.value) return node.left == undefined ? false : this.ContainsRecursive(value, node.left); //if the value is less than the current node, check the left subtree
		return node.right == undefined ? false : this.ContainsRecursive(value, node.right); //else, check the right subtree

	}
	Insert(value) {
		let node = new BSTNode(value);
		if (this.IsEmpty()){
			this.root = node; //if the tree is empty, set the root to the new node
			return this;
		}
			
		let runner = this.root; //else, set the runner to the root
		let inserted = false; //set the inserted flag to false
		while (!inserted) { //traverse the tree until the node is inserted
			if (value < runner.value) { //if the value is less than the current node, check the left subtree
				if (runner.left == undefined) { //if the left subtree is empty, insert the node
					runner.left = node;
					inserted = true; //set the inserted flag to true
				}
				else { //else, set the runner to the left subtree
					runner = runner.left;
				}
			}
			else { //else, check the right subtree
				if (runner.right == undefined) { //if the right subtree is empty, insert the node
					runner.right = node;
					inserted = true; //set the inserted flag to true
				}
				else { //else, set the runner to the right subtree
					runner = runner.right;
				}
			}
		}
		return this;

	}

	/* Worst Time Complexity O(N) <- Only happens if you have an unbalanced tree.  */
	/* Average Time Complexity: O(log n) */
	/* Best Time Complexity: O(1) <- Only happens if the list is empty */
	/* Description: Inserts the given node into the tree RECURSIVELY based on its value */
	InsertRecursive(node, value) {
		if (this.IsEmpty()) this.root = new BSTNode(value); //if the tree is empty, set the root to the new node
		if (value > node.value) { //if the value is greater than the current node, check the right subtree
			if (node.right == undefined) { //if the right subtree is empty, insert the node
				node.right = new BSTNode(value);
			}
			else { //else, set the runner to the right subtree
				this.InsertRecursive(node.right, value);
			}
		}
		else { //else, check the left subtree
			if (node.left == undefined) { //if the left subtree is empty, insert the node
				node.left = new BSTNode(value);
			}
			else { //else, set the runner to the left subtree
				this.InsertRecursive(node.left, value);
			}
		}
	}
	PreOrder(node)
	{
		if(!node) return;
		console.log(node.value);
		this.PreOrder(node.left);
		this.PreOrder(node.right);
		/* Call me recursively */
		/* Call me recursively */
	}

	/* Ordering: Left, Node, Right */	
	/* Time Complexity: O(N) */
	/* Description: Traverse / Iterate the tree In-Order. */
	/* console.log(node.value) each node's value */
	/* When To Use: When you need to explore the tree INORDER */
	InOrder(node)
	{
		if(!node) return;
		this.InOrder(node.left);
		console.log(node.value);
		this.InOrder(node.right);
		/* Call me recursively */
		/* Call me recursively */
	}

	/* Left, Right, Node */
	/* Time Complexity: O(N) */
	/* Description: Traverse / Iterate the tree Post-Order. */
	/* console.log(node.value) each node's value */
	/* When To Use: When you need to explore LEAVES before ROOTS */
	PostOrder(node)
	{
		if(!node) return;
		this.PostOrder(node.left);
		this.PostOrder(node.right);
		console.log(node.value);
		/* Call me recursively */
		/* Call me recursively */
	}


	/* I'm just here to print your BST In-Order. */
	/* Could use me as an example to solve above algos, since I'm recursive and all. */
	Log(node, fmt = "") {
		if (!node) return fmt;
		fmt = this.Log(node.left, fmt);
		fmt += node.value + "->";
		fmt = this.Log(node.right, fmt);
		return fmt;
	}



};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
// let bst = new BST();

// bst.root = new BSTNode(100);
// bst.root.left = new BSTNode(50);
// bst.root.right = new BSTNode(150);

// bst.root.left.left = new BSTNode(25);
// bst.root.left.right = new BSTNode(75);

// bst.root.right.left = new BSTNode(125);
// bst.root.right.right = new BSTNode(175);


// bst.Insert(44);
// console.log(bst.Log(bst.root)); 	/* Expected: 25->44->50->75->100->125->150->175-> */
// bst.InsertRecursive(bst.root, 22);
// console.log(bst.Log(bst.root));		/* Expected: 22->25->44->50->75->100->125->150->175-> */

let bst=new BST();
bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);
bst.root.right=new BSTNode(150);
bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

console.log(bst.PreOrder(bst.root)); 	/* Expected: 100 50 25 75 150 125 175 */
console.log(bst.InOrder(bst.root)); 	/* Expected: 25 50 75 100 125 150 175 */
console.log(bst.PostOrder(bst.root));   /* Expected: 25 75 50 125 175 150 100 */