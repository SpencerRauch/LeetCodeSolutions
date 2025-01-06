// implement a trie with insert, search, and startsWith methods
// https://leetcode.com/problems/implement-trie-prefix-tree/
class Trie {
    constructor() {
      this.isEnd = false;
      this.children = {};
    }
  }
  
  /** 
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function(word, node=this) {
      for ( let i = 0; i < word.length; i++){
          let char = word[i]
          if(!node.children.hasOwnProperty(char)){
              node.children[char] = new Trie()
          }
          node = node.children[char]
  
      }
      node.isEnd = true;
  };
  
  Trie.prototype.traverse = function(word){
      let node = this;
      for (let char of word){
          if (!node.children.hasOwnProperty(char)){
              return null
          }
          node = node.children[char]
      }
      return node
  }
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function(word) {
      let node = this.traverse(word)
      return node != null && node.isEnd;
  };
  
  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function(prefix) {
      let node = this.traverse(prefix)
      return node != null
  };
  
  /** 
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */