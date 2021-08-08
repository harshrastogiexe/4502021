class Item {
  _next = Symbol("next");
  constructor(data) {
    this.data = data;
    this[this._next] = null;
  }
  get next() {
    return this[this._next];
  }

  set next(data) {
    return (this[this._next] = data);
  }
}

class List {
  head = null;

  *[Symbol.iterator]() {
    for (let node of this.iterate()) yield node.data;
  }

  *iterate() {
    let current = this.head;

    while (current) {
      yield current;
      current = current.next;
    }
  }

  add(data) {
    const node = new Item(data);
    if (!this.head) this.head = node;
    else {
      let lastNode;
      for (const node of this.iterate()) lastNode = node;
      lastNode.next = node;
    }

    return this;
  }
}

const list = new List();
list.add(10).add(20).add(30).add(40);

console.log([...list]);

// for (const listItem of list) console.log(listItem);
//////////////////////////////////////////////////////////////

const Fibonacci = {
  *[Symbol.iterator]() {
    let [prev, curr] = [0, 1];
    yield prev;
    yield curr;
    for (let i = 0; i < 20; i++) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  },
};

// console.log([...Fibonacci[Sy mbol.iterator]()][3]);

// console.log(...Fibonacci);
/////////////////////////

function* randomNumberGenerator(count, max = 1, min = 0) {
  while (count--) {
    yield Math.random() * (max - min + 1) + min;
  }
}

function simulateApi() {
  return new Promise((resolve, reject) => {
    const random = Math.floor(randomNumberGenerator(1, 1000, 300).next().value);
    setTimeout(() => {
      if (random < 500) return reject({ status: false, obtained: random });
      return resolve({ status: true, obtained: random });
    }, random);
  });
}

function fetch() {
  simulateApi();
}

async function* generator() {
  let i = 10;
  console.time("GEen");
  while (i--) {
    //   try {
    //     yield await simulateApi();
    //   } catch (e) {
    //     console.log("Error");
    //   }
    simulateApi()
      .then((result) => result)
      .catch(() => console.log("Error"));
  }
  console.timeEnd("GEen");
}

async function simulateAPiBasedRandomNumber() {
  for await (const num of generator()) {
    console.log(num);
  }
}

simulateAPiBasedRandomNumber();
