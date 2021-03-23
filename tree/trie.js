class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    // if no char set end
    if (!input.length) node.setEnd();
    // if no key, create one
    else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      // if key, go to there
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word) {
    let node = this.root;

    while (word.length > 1) {
      if (!node.keys.has(word[0])) return false;
      else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }

    return node.keys.get(word) && node.keys.get(word).isEnd() ? true : false;
  }

  print() {
    const words = [];

    const search = (node, string) => {
      // if there's keys add to str
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        // this is needed for end that still has children
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
      }
    };

    search(this.root, "");
    return words;
  }
}

myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("dorf"));
console.log(myTrie.print());
