function sumOfN(value) {
  if (value === 1) {
    return 1;
  }
  return value + sumOfN(value - 1);
}
