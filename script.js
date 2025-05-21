function shortcut(s1, s2) {
  if (!s1 || !s2) {
    return '';
  }
  return s1[0] + s2[0];
}

// Test cases
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world"));           // 'Hw'
console.log(shortcut("", "International"));        // ''
console.log(shortcut("Amnesty", ""));              // ''

// Do not change the code below.
const s1Input = prompt("Enter s1:");
const s2Input = prompt("Enter s2:");
alert(shortcut(s1Input, s2Input));
