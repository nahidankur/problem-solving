function truncateString(str, num) {
    const array = str.split("")
  
    array.splice(num, array.length)
    if(array.join('').trim() === str){
        console.log(array.join('').trim())
    } else{
        console.log(array.join('').trim() +"...") 
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

//pseudocode
// const masti = 'I am a good boy'
// const array = masti.split('')
// // 4ta rakhbo
// array.splice(4, array.length  ).join('')
// console.log(array.join(''))

