function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice()

  localArray.splice(n, 0, ...arr1)
  console.log(localArray)
   
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

