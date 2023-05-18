function bouncer(arr) {
    let array = []
     
    for(let i = 0; i< arr.length; i++) {
        if(arr[i]){
            array.push(arr[i])
        }
    }
    console.log(array)
 
  }
  
  bouncer([7, "ate", "", false, true, null, 9]);


