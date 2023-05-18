function largestOfFour(arr) {
    const results = []

    for(let i = 0; i < arr.length; i++) {
        let largestNumOfEachArray = arr[i][0]
        for(let j = 1; j<arr[i].length; j++){
            if(arr[i][j] > largestNumOfEachArray){
                largestNumOfEachArray = arr[i][j]
            }
        }
        results.push(largestNumOfEachArray)
    }
    console.log(results)


  }
  
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3, 5], [32, 35, 37, 39], [1000, 1001, 857, 1]]);