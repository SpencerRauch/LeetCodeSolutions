/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
 var findRotateSteps = function(ring, key) {

    let ringDLL = new DLL().seedFromString(ring);
    ringDLL.tail.next = ringDLL.head;
    ringDLL.head.prev = ringDLL.tail;
    let count = findSteps(ringDLL.head, key);
    return count;

};

const findSteps= (currentnode, key, count=0) =>{
    debugger;
        let clockwise = currentnode;;
        let counterclockwise = currentnode;
        let rightcount = count;
        let leftcount = count;
        if (key.length == 0) return count;
        
        while (clockwise.data != key[0]){
            clockwise = clockwise.next;
            rightcount++;
        }
        rightcount++;
        
        while (counterclockwise.data != key[0]){
            counterclockwise = counterclockwise.prev;
            leftcount++;
        }
        leftcount++;
       
        key = key.slice(1);
        if (clockwise !== counterclockwise){
            return Math.min(findSteps(clockwise,key,rightcount),findSteps(counterclockwise,key,leftcount))
        } else return findSteps(clockwise,key,rightcount);

            
        

   
    }
    
    


 class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }

  class DLL {

    constructor() {
      this.head = null;
      this.tail = null;
    }

    insertAtBack(data) {
      let newNode = new Node(data);
  
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
  
        return this;
      }
  
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
  
      return this;
    }
    seedFromString(string=""){
      for (let letter of string){
        this.insertAtBack(letter)
      }
      return this;
    }
}
console.log(findRotateSteps("xrrakuulnczywjs",
"jrlucwzakzussrlckyjjsuwkuarnaluxnyzcnrxxwruyr"))