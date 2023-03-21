const canCanstruct = (target, wordBank) => {
  if (target === '') return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canCanstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
};

console.log(canCanstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true

console.log(
  canCanstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); //false

console.log(
  canCanstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // true

console.log(
  canCanstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // false
//brute force
//Time complexity => O(n^m *m) 
//Space complexity => O(m * m) height of the stack * passing suffix
