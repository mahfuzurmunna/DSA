function bubbleSort(array) {
  let isSwap;

  do {
    isSwap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        isSwap = true;
      }
    }
  } while (isSwap);
  return array;
}

let arr = [3, 1, 4, 1, 5];

console.log(bubbleSort(arr));
