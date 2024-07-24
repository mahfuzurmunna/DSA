function phoneNumberDirectory(arr) {
  const dictionary = new Map();
  for (let info of arr) {
    const [name, number] = info.split(":");
    dictionary.set(name, number);
  }
  console.log(dictionary);
}

const phoneNumbers = [
  "John:123-456-7890",
  "Jane:987-654-3210",
  "Joe:555-555-5555",
];
phoneNumberDirectory(phoneNumbers);

const str = "John:123-456-7890";

console.log();
