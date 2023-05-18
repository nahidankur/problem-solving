function repeatStringNumTimes(str, num) {
    let array = str.split('')
    const repeatArray = []
    
    for(let i = 0; i < num; i++) {
        repeatArray.push(...array)
    }
    const repeatString = repeatArray.join('')
    console.log(repeatString)
    

    
  }
  
  repeatStringNumTimes("abc", 6);

// const m = ['a', 'b', 'c']

// const s = [...m, ...m]
// console.log(s.join(''))
