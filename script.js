// Problem No 1
let marks = {
    deep: 90,
    kunal: 85, 
    dhruv: 98, 
    jaypal: 95,
    kevalbhai: 99,
}
for(let i=0 ; i<Object.keys(marks).length;i++){
    console.log("The marks of student "+ Object.keys(marks)[i]+ "are" + marks[Object.keys(marks)[i]])
}

// Problem No 2
for (let key in marks){
    // console.log("The marks of student " + key+ "are" + marks[key])
    // console.log("The marks of student "+ Object.keys(marks)[i]+ "are" + marks[Object.keys(marks)[i]])
}


// Problem No 3
let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")

// Problem No 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}

console.log(mean(4, 5, 6, 7))