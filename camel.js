String.prototype.camelCase = function() {
  // split the string into words
  const words = this.split(' ');

  // capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  // join the words together without spaces
  return words.join('');
};

// example usage:
console.log('test case'.camelCase()); // output: "TestCase"
console.log('camel case word'.camelCase()); // output: "CamelCaseWord"
