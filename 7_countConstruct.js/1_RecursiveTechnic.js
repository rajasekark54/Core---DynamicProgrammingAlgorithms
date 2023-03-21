const countConstruct = (target, wordBank) => {
  if (target === '') return 1;
  let totalCount = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalCount += countConstruct(suffix, wordBank);
    }
  }

  return totalCount;
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1

console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
); // 0

console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']),
); // 4

// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// ); // 0

//brute force
//brute force
//Time complexity => O(n^m *m)
//Space complexity => O(m * m) height of the stack * passing suffix
