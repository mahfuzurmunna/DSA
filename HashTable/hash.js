class HashTable {
  constructor(limit = 14) {
    this.table = [];
    this.limit = limit;
  }

  //hash method
  _hash(key, max) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }

  //set method
  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.table[index] === undefined) {
      this.table[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.table[index].push([key, value]);
      }
    }
  }

  //get method
  get(key) {
    const index = this._hash(key, this.limit);

    if (this.table[index] === undefined) {
      return false;
    } else {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
  }

  //has method
  has(key) {
    const index = this._hash(key, this.limit);

    if (this.table[index] !== undefined) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  //remove method
  remove(key) {
    const index = this._hash(key, this.limit);

    if (this.table[index]) {
      if (this.table[index].length === 1 && this.table[index][0][0] === key) {
        delete this.table[index];
      } else {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            delete this.table[index][i];
          }
        }
      }
    }
  }

  //clear method
  clear() {
    this.table = [];
  }

  //getValues
  getValues() {
    let values = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (const [key, value] of this.table[i]) {
          values.push(value);
        }
      }
    }

    return values;
  }
  //printTable
  printTable() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`Bucket ${i} is: ${JSON.stringify(this.table[i])} `);
      } else {
        console.log(`Bucket ${i} is empty`);
      }
    }
  }
}

const myHashTable = new HashTable();

// const result = myHashTable._hash("John", myHashTable.limit);

myHashTable.set("John", "555-234-3455");
myHashTable.set("James", "555-349-3948");
myHashTable.set("Sara", "555-469-3334");

console.log(myHashTable.getValues());
console.log(myHashTable.get("John"));
myHashTable.remove("James");

console.log(myHashTable.has("John"));
