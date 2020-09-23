import LinkedList from "./linkedList";

test("LinkedList.pushFront() and LinkedList.popFront() pushes and pops items from the front of the list", () => {
  const TEST_CASES = [
    {
      ops: [
        [1, "pushFront"],
        [2, "pushFront"],
        [undefined, "popFront"],
        [undefined, "popFront"],
      ],
      result: [undefined, undefined, 2, 1],
    },
    {
      ops: [
        [1, "pushFront"],
        [undefined, "popFront"],
        [2, "pushFront"],
        [undefined, "popFront"],
      ],
      result: [undefined, 1, undefined, 2],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const l = new LinkedList();
    const curResult = [];
    for (const [val, cmd] of ops) {
      if (cmd === "pushFront") {
        curResult.push(l.pushFront(val));
      } else if (cmd === "popFront") {
        curResult.push(l.popFront());
      }
    }
    expect(curResult).toEqual(result);
  }
});

test("LinkedList.getFront() and LinkedList.getBack() return the front and back of the list", () => {
  const TEST_CASES = [
    {
      ops: [
        [1, "pushFront"],
        [2, "pushFront"],
        [undefined, "getFront"],
        [undefined, "getBack"],
      ],
      result: [undefined, undefined, 2, 1],
    },
    {
      ops: [
        [1, "pushFront"],
        [undefined, "getFront"],
        [undefined, "getBack"],
        [2, "pushFront"],
        [undefined, "getFront"],
        [undefined, "getBack"],
        [3, "pushBack"],
        [undefined, "popFront"],
        [undefined, "getFront"],
        [undefined, "getBack"],
        [undefined, "popBack"],
        [undefined, "getBack"],
      ],
      result: [undefined, 1, 1, undefined, 2, 1, undefined, 2, 1, 3, 3, 1],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const l = new LinkedList();
    const curResult = [];
    for (const [val, cmd] of ops) {
      let res = undefined;
      if (cmd === "pushFront") {
        res = l.pushFront(val);
      } else if (cmd === "pushBack") {
        res = l.pushBack(val);
      } else if (cmd === "getFront") {
        res = l.getFront();
      } else if (cmd === "getBack") {
        res = l.getBack();
      } else if (cmd === "popFront") {
        res = l.popFront();
      } else if (cmd === "popBack") {
        res = l.popBack();
      }
      curResult.push(res);
    }
    expect(curResult).toEqual(result);
  }
});

test("LinkedList.empty() returns whether the list is empty", () => {
  const TEST_CASES = [
    {
      ops: [
        [undefined, "empty"],
        [1, "pushFront"],
        [undefined, "empty"],
        [2, "pushBack"],
        [undefined, "empty"],
      ],
      result: [true, undefined, false, undefined, false],
    },
    {
      ops: [
        [undefined, "empty"],
        [1, "pushBack"],
        [undefined, "empty"],
        [2, "pushBack"],
        [undefined, "empty"],
        [undefined, "popFront"],
        [undefined, "empty"],
        [undefined, "popBack"],
        [undefined, "empty"],
      ],
      result: [true, undefined, false, undefined, false, 1, false, 2, true],
    },
  ];
  for (const { ops, result } of TEST_CASES) {
    const l = new LinkedList();
    const curResult = [];
    for (const [val, cmd] of ops) {
      let res = undefined;
      if (cmd === "pushFront") {
        res = l.pushFront(val);
      } else if (cmd === "pushBack") {
        res = l.pushBack(val);
      } else if (cmd === "popFront") {
        res = l.popFront();
      } else if (cmd === "popBack") {
        res = l.popBack();
      } else if (cmd === "empty") {
        res = l.empty();
      }
      curResult.push(res);
    }
    expect(curResult).toEqual(result);
  }
});
