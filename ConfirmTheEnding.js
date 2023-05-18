function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target
  }
  
  confirmEnding("Bastian", "n");
  
 // This can be done with .endsWith(target)

