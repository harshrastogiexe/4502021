function longestNonRepeatingSubstring(str) {
  let [left, len] = [0, 0];
  const character = new Set();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (character.has(char))
      while (character.has(char)) character.delete(str[left++]);
    character.add(char);
    if (i - left + 1 > len) len = i - left + 1;
  }
  return len;
}

longestNonRepeatingSubstring("pwwkew");
longestNonRepeatingSubstring("abcabcbb");
longestNonRepeatingSubstring("bbbbb");
