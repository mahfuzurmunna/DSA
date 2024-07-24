class HashTable {
  constructor(limit = 14) {
    // Initialize the storage and limit variables
    this.storage = [];
    this.limit = limit;
  }

  // Hash function
  _hash(key, max) {
    // Initialize the hash variable to 0
    let hash = 0;
    // Iterate through the key
    for (let i = 0; i < key.length; i++) {
      // Add the character code at each iteration to the hash variable
      hash += key.charCodeAt(i);
    }
    // Return the hash modulo the max
    return hash % max;
  }

  // Insert a key-value pair into the hash table
  set(key, value) {
    // Hash the key
    const index = this._hash(key, this.limit);
    // If the index is empty, insert the key-value pair
    if (this.storage[index] === undefined) {
      // create a bucket
      this.storage[index] = [[key, value]];
    } else {
      //  If the index is not empty, iterate through the bucket (collision handling)
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        // If the key exists, update the value
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      // If the key does not exist, insert the key-value pair
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  // Get a value from the hash table
  get(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    // Hash the key
    const index = this._hash(key, this.limit);

    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }

  // Check if a key exists in the hash table
  has(key) {
    // Hash the key to find the index
    const index = this._hash(key, this.limit);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  // Print all keys/values in the table
  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} Empty`);
      }
    }
  }

  // Clear all key/values
  clear() {
    this.storage = [];
  }

  //get values
  getValues() {
    // Create an empty array to store the values
    const values = [];

    // Loop through each bucket in the storage
    for (let i = 0; i < this.storage.length; i++) {
      // Check if the bucket is not empty
      if (this.storage[i]) {
        // Iterate through each key-value pair in the bucket
        for (const [key, value] of this.storage[i]) {
          // Push the value to the values array
          values.push(value);
        }
      }
    }

    // Return the array of values
    return values;
  }
}

const myHashTable = new HashTable();

// const result = myHashTable._hash("John", myHashTable.limit);

myHashTable.set("John", "555-234-3455");
myHashTable.set("James", "555-349-3948");
myHashTable.set("Sara", "555-469-3334");

// console.log(myHashTable.get("Sara"));
// myHashTable.remove("James");

// console.log(myHashTable.has("John"));
// console.log(myHashTable.has("James"));

// myHashTable.clear();
// myHashTable.printTable();

console.log(myHashTable.getValues());
// console.log(result);

function wordInstanceCount(str, word) {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequence = new HashTable();

  const targetWord = word.toLowerCase();

  let count = 0;

  for (const currentWord of words) {
    if (currentWord === "") continue;

    if (wordFrequence.has(currentWord)) {
      wordFrequence.set(currentWord, wordFrequence.get(currentWord) + 1);
    } else {
      wordFrequence.set(currentWord, 1);
    }
    if (currentWord === targetWord) {
      count = wordFrequence.get(currentWord);
    }
  }
  console.log(count);
}

wordInstanceCount("The quick fox jumps from the kitchen", "the");

function anagramGroup(str) {
  const anagramGroup = new HashTable();

  for (const word of str) {
    const sortedWords = word.split("").sort().join("");

    if (anagramGroup.get(sortedWords)) {
      anagramGroup.get(sortedWords).push(word);
    } else {
      anagramGroup.set(sortedWords, [word]);
    }
  }

  console.log(anagramGroup.getValues());
}

anagramGroup(["cat", "act", "dog", "god"]);
