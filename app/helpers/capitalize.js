import { helper } from '@ember/component/helper';

export function capitalize([input]) {
  let words = input.split(/\s+/).map((word) => {
    return word.capitalize();
  });

  return words.join(' ');
};

export default helper(capitalize);
