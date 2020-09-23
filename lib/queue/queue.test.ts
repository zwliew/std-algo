import Queue from "./queue";

test("Queue.push() and Queue.pop() pushes and pops items in the correct order", () => {
  const TEST_CASES = [
    {
      ops: [
        [1, "push"],
        [2, "push"],
        [undefined, "pop"],
        [undefined, "pop"],
      ],
      result: [undefined, undefined, 1, 2],
    },
    {
      ops: [
        [1, "push"],
        [undefined, "pop"],
        [2, "push"],
        [undefined, "pop"],
      ],
      result: [undefined, 1, undefined, 2],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const q = new Queue();
    const curResult = [];
    for (const [val, cmd] of ops) {
      if (cmd === "push") {
        curResult.push(q.push(val));
      } else if (cmd === "pop") {
        curResult.push(q.pop());
      }
    }
    expect(curResult).toEqual(result);
  }
});

test("Queue.front() and Queue.back() return the front and back of the queue", () => {
  const TEST_CASES = [
    {
      ops: [
        [1, "push"],
        [2, "push"],
        [undefined, "front"],
        [undefined, "back"],
      ],
      result: [undefined, undefined, 1, 2],
    },
    {
      ops: [
        [1, "push"],
        [undefined, "front"],
        [undefined, "back"],
        [2, "push"],
        [undefined, "front"],
        [undefined, "back"],
        [undefined, "pop"],
        [undefined, "front"],
        [undefined, "back"],
      ],
      result: [undefined, 1, 1, undefined, 1, 2, 1, 2, 2],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const q = new Queue();
    const curResult = [];
    for (const [val, cmd] of ops) {
      if (cmd === "push") {
        curResult.push(q.push(val));
      } else if (cmd === "pop") {
        curResult.push(q.pop());
      } else if (cmd === "front") {
        curResult.push(q.front());
      } else if (cmd === "back") {
        curResult.push(q.back());
      }
    }
    expect(curResult).toEqual(result);
  }
});

test("Queue.empty() returns whether the queue is empty", () => {
  const TEST_CASES = [
    {
      ops: [
        [undefined, "empty"],
        [1, "push"],
        [undefined, "empty"],
        [2, "push"],
        [undefined, "empty"],
      ],
      result: [true, undefined, false, undefined, false],
    },
    {
      ops: [
        [undefined, "empty"],
        [1, "push"],
        [undefined, "empty"],
        [2, "push"],
        [undefined, "empty"],
        [undefined, "pop"],
        [undefined, "empty"],
        [undefined, "pop"],
        [undefined, "empty"],
      ],
      result: [true, undefined, false, undefined, false, 1, false, 2, true],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const q = new Queue();
    const curResult = [];
    for (const [val, cmd] of ops) {
      if (cmd === "empty") {
        curResult.push(q.empty());
      } else if (cmd === "push") {
        curResult.push(q.push(val));
      } else if (cmd === "pop") {
        curResult.push(q.pop());
      }
    }
    expect(curResult).toEqual(result);
  }
});
