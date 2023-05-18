function mutation(arr) {
    const parent = arr[0].toLowerCase() 
    const child = arr[1].toLowerCase() 
    for(let i = 0; i< child.length; i++){
        if(parent.indexOf(child[i]) <0 ) {
            return false
        }
    } 
    return true
    
  }
  
  mutation(["hello", "hey"]);

