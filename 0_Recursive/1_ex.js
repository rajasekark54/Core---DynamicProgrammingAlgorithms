const { timeFilter } = require('linkedin-jobs-scraper');

const sumDown = (num) => {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
};

const sumUp = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

//Recursive
const preSum = (num, total = 0) => {
  if (num === 0) return total;
  total += num;
  return preSum(num - 1, total);
};

const postSum = (num) => {
  if (num === 0) return num;
  let res = postSum(num - 1);
  const sum = num + res;
  return sum;
};

const tree = {
  name: '1',
  children: [
    { name: '2', children: [] },
    {
      name: '3',
      children: [
        { name: '4', children: [] },
        { name: '5', children: [] },
      ],
    },
  ],
};

const getChildNameByPreOrder = (t, names = []) => {
  if (t?.name) {
    names.push(t.name);
  } else {
    return names;
  }

  for (const item of t.children) {
    getChildNameByPreOrder(item, names);
  }
  return names;
};

describe('Way to solve problems in different way by iteration and recursive', () => {
  test('Loop iteration - sumDown', () => {
    const result = sumDown(3);
    expect(result).toEqual(6);
  });

  test('Loop iteration - sumUp', () => {
    const result = sumUp(3);
    expect(result).toEqual(6);
  });

  test('Recursive iteration - Presum', () => {
    const result = preSum(3);
    expect(result).toEqual(6);
  });

  test('Recursive iteration - Postsum', () => {
    const result = postSum(3);
    expect(result).toEqual(6);
  });

  test('Recursive iteration - getChildNameByPreOrder', () => {
    const result = getChildNameByPreOrder(tree);
    const expected = ['1', '2', '3', '4', '5'];
    expect(result).toEqual(expected);
  });
});
