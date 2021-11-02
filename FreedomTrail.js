/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  let paths = [];
  let ringDLL = new DLL().seedFromString(ring);
  ringDLL.tail.next = ringDLL.head;
  ringDLL.head.prev = ringDLL.tail;
  findSteps(ringDLL.head, key, paths);
  return Math.min(...paths);

};

const findSteps = (currentnode, key, paths, count = 0) => {
  if (count > Math.min(...paths)){
    return;
  }
  let clockwise = currentnode;;
  let counterclockwise = currentnode;
  let rightcount = count;
  let leftcount = count;
  if (key.length == 0) {
    paths.push(count);
    return;
  }

  while (clockwise.data != key[0]) {
    clockwise = clockwise.next;
    rightcount++;
  }
  rightcount++;

  while (counterclockwise.data != key[0]) {
    counterclockwise = counterclockwise.prev;
    leftcount++;
  }
  leftcount++;

  key = key.slice(1);
  if (clockwise !== counterclockwise) {
    findSteps(clockwise, key, paths, rightcount)
    findSteps(counterclockwise, key, paths, leftcount)
  } else if (leftcount > rightcount) {
    findSteps(clockwise, key, paths, rightcount);
  } else return findSteps(counterclockwise, key, paths, leftcount)


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
  seedFromString(string = "") {
    for (let letter of string) {
      this.insertAtBack(letter)
    }
    return this;
  }
}

console.log(findRotateSteps("caotmcaataijjxi",
"oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx"))