const masti = "I am a boy"

const array =  masti.split(" ")

const result = []

for(let i = 0; i<array.length; i++) {
   let kelai = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLocaleLowerCase()
   result.push(kelai)
}
console.log(result.join(" "))
