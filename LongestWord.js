const LongestWordFunc1 = (str)=> {
    return Math.max(...str.split(" ").map((word)=> word.length))

}
const sentence1 = "I am a good boy"
LongestWordFunc1(sentence1)


// Using for Loop(Alternate way

const LongestWordFunc2 = (str)=> {
    let Maxlength=  0
    let array = str.split(" ")
    for(let i = 0; i< array.length; i++) {
        if(array[i].length > Maxlength) {
            Maxlength = array[i].length
        }
    }

    console.log(Maxlength)
}
const sentence2 = "I am a good boy"
LongestWordFunc2(sentence2)
