function seededRandom(seed) {
  let value = seed % 2147483647; // Step 1: Initialize the seed
  if (value <= 0) value += 2147483646; // Ensure the seed is positive

  return function () {
    value = (value * 16807) % 2147483647; // Step 2: Generate the next value
    return (value - 1) / 2147483646; // Step 3: Normalize to [0, 1)
  };
}