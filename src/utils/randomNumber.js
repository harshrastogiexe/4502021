exports.generateRandom = function* (count = 10, minmax = {}) {
  const [min, max] = [minmax.min || 0, minmax.max || 10];
  for (let i = 0; i < count; i++) {
    yield min + Math.random() * (max - min);
  }
};
