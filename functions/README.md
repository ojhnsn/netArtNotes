# FUNCTIONS
## Ways To Set A Function
```js
function powers2(){
  let num = 1
  for(let i=0; i<8; i++){
    console.log(num)
    num*=2
  }
}

powers2()
```
- must call function outside by its name followed with () to log answer
- num is scoped only to powers2

```js
let powers2=function(){
//code
}
```
```js
let powers2= ()=>{
//code
}
```
arrow function

```js
function square(b){
  b*=b
  return b
}
```
- pure function: doesn't call anything from outside it
- reusable

## Functional Programming

### recursive
```js
function replaceAll(string, char, rep){
  if( string.indexOf(char) < 0 ){
    return string
  } else {
    string = string.replace( char, rep )
    return replaceAll( string,char,rep )
  }
}
let newName=replaceAll("olivia johnson","o",'u')
console.log(newName)

```
- calls itself
- used to create a loop

### high order
```js
function repeat(num, func){
  for (var i = 0; i < num; i++) {
    func(i)
  }
}

function sayHi(num){
    console.log(`hello for the ${num} time!`)
}
repeat(10, sayHi)
```
- takes in another function
