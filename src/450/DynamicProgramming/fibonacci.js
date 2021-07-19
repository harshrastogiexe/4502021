const store = new Map();
store.set(0, 0);
store.set(1, 1);

function fibonacci(num) {
  if (store.has(num)) return store.get(num);
  store.set(num, fibonacci(num - 1) + fibonacci(num - 2));
  return store.get(num);
}

const result = fibonacci(1000);
