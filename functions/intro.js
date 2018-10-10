function repeat(num, func){
  for (var i = 0; i < num; i++) {
    func(i)
  }
}

function sayHi(num){
    console.log(`hello for the ${num} time!`)
}
repeat(10, sayHi)

function startsWithA( string ){
  if(string[0]=="A") return true
  else return false
}
function hasPrefix(string){
  if(string.indexOf('Mr.') >= 0) ||
  if(string.indexOf('Mrs.') >=0) ||
  if(string.indexOf('Ms.') >= 0){
    return true
}else{
  return false
}
arr=['Olivia','Paige','Ash']
function filter(array, func){
  let passed = []
  for (let i = 0; i < array.length; i++) {
    if(func(arr[i])){
      passed.push(arr[i])
    }
  }
  return passed
}

let x = startsWithA ("Olivia")
let faculty = ['Nick','John','Mr.Johnson','Ms.Small']
let docs = filter(faculty, hasPrefix)

make a brush in p5
has to be a function
take in arguments x & y
has to have a side effect
needs to render an image to the p5 createCanvas

function brush (x,y,s){
  let s=10
  ellipse(x-s/2,y,s)
}
function setup(){
  createCanvas(innerWidth,innerHeight)
}
function draw(){
  brush(mouseX,mouseY)
}
/xL3hjwu6

//how to make an eraser?

https://jsfiddle.net/pukbawdo/
