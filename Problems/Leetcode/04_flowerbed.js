function canPlaceFlowers(flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (n === 0) break;
    if (
      flowerbed[i] !== 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
}
