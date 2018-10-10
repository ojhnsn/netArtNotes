let age = process.argv[2]
let drinkingAge = 21
let senior = 55

if(age >= senior){
  console.log("welcome free drink")
} else if (age >= drinkingAge){
  console.log("welcome to the bar")
} else{
  console.log("go some place else")
}
