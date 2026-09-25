const relu = (value) => Math.max(0, value);

export function runNetwork(a, b) {
  const firstSum = a - b;
  const secondSum = b - a;
  const firstActivation = relu(firstSum);
  const secondActivation = relu(secondSum);

  return {
    inputs: [a, b],
    sums: [firstSum, secondSum],
    activations: [firstActivation, secondActivation],
    output: firstActivation + secondActivation
  };
}
