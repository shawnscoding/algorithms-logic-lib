class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  _isDuplicate(index, key) {
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return true;
        }
      }
    }
    return false;
  }
  set(key, value) {
    let index = this._hash(key);
    const res = this._isDuplicate(index, key);
    if (res) {
      return;
    }
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!result.includes(this.keyMap[i][j][0])) {
            result.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return result;
  }

  values() {
    const result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!result.includes(this.keyMap[i][j][1])) {
            result.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return result;
  }
  entries() {
    const result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.push([this.keyMap[i][j][0], this.keyMap[i][j][1]]);
        }
      }
    }

    return result;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log(ht.keys());
console.log(ht.values());
console.log(ht.entries());
