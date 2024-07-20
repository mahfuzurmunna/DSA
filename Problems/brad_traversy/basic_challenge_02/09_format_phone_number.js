function formatPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join("");
  const second = numbers.slice(3, 6).join("");
  const third = numbers.slice(6).join("");

  return `(${first}) ${second}-${third}`;
}

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
