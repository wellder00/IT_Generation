//Task 1
let arr1 = [1,3,2,-4]

function difference (arr1) {
  let sort = arr1.sort() 
  return sort.slice(-1) - sort[0]
}

console.log(difference(arr1))
// ==========================================================================

//Task 2
let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta natus sequi et veritatis voluptatum blanditiis veniam! Earum obcaecati corporis accusantium.'
function lengthStr (str, length){
  let arr = str.split(' ')
  let result = [];  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length)   result.push(arr[i]) 
  }
  return result
}

console.log(lengthStr(str, 8))
// ==========================================================================

//Task 3
let endsWith = (str, ends) => str.endsWith(ends)

console.log(endsWith('Lorem', 'em'))
// ==========================================================================

//Task 4
function averages(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i+1] !== undefined) result.push((arr[i] + arr[i+1])/2);       
  }
  return result
}

console.log(averages([2, -2, 2, -2, 2]));
console.log(averages([1, 3, 5, 1, -10]));
// ==========================================================================

//Task 5
function vowels(str){
  let arr = str.toLowerCase().split(''); 
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if(el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u' || el === 'y')
    result.push(el)
  }  
  return result.length
}

console.log(vowels('CelEbrAtiOn'));
console.log(vowels('Palm'));
// ==========================================================================

//Task 5(a)
function replace(str){
  if (str.match(/a|b|c/g) === null) return null
   return str.replace(/a|b|c/g, '')
}

console.log(replace("This might be a bit hard"));
console.log(replace("hello world!"));
// ==========================================================================

//Task 6
function difference(arr1, arr2){
  let result = arr1.concat(arr2).sort((a,b) => a-b);  
  return [...new Set(result)]
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ==========================================================================

//Task 7
function objChenge(obj){
  return Object.keys(obj).reduce((acc, val) => {
    acc[obj[val]] = val;
    return acc;
}, {});
}

console.log(objChenge({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
// ==========================================================================


//Task 8
function calculateDifference(obj, num){ 
  let val = Object.values(obj)
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    const el = val[i];
    sum +=el  
  }
  
  return sum - num
  }
  
  console.log(calculateDifference({ "baseball bat": 20 }, 5))
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))
// ==========================================================================

//Task 9
function doesBrickFit(a, b, c, w, h) {
  if (a * b <= w * h || a * c <= w * h) return true
  return false
}

console.log(doesBrickFit(1, 1, 1, 1, 1))
console.log(doesBrickFit(1, 2, 1, 1, 1))
console.log(doesBrickFit(1, 2, 2, 1, 1))
// ==========================================================================

//Task 10
let filePath = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
let fileName = filePath.split('.')[0].split('\\').pop()
console.log(fileName); 
// ==========================================================================

//Task 11
let str1  = 'Kate loves JS'
let str2 = 'ves JS Kate lo'

function surch(str1, str2) {
  if(str2.concat(str2).includes(str1)) return true
  return false 
}

console.log(surch(str1, str2)); 
// ==========================================================================

//Task 12
let a = [12,3,5,7,8,23,4,665,2,1]
function sort(arr){
  let b = [];
  let c = [];
 
  let sort = arr.sort((a,b) => a-b)
  console.log(sort)
  for (let i = 0; i < sort.length ; i++) {
    if (i % 2 === 0) {b.push(sort[i])
          }    
    else c.push(sort[i])
  }
  console.log(b)
  console.log(c)
  return `Масив з меншими елементами: [${b}] || Масив з більшими елементами: [${c}]`
}

console.log(sort(a))
// ==========================================================================

//Task 13
let str = 'Lorem ipsum dolor sit ameFFt, 4323234 333 3334 44444444444 444444444444 consectetur 444 wssrr@gmail.com 43256546 adipisADicing elit. https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions Soluta natSSus sequi etFGcati corporis accusantium. https://translate.google.com/ '
function correctString(string) {
  let strcorrect1 = string.toLowerCase()
  let strcorrect2 = strcorrect1[0].toUpperCase() + strcorrect1.slice(1);
  let strcorrect3 = strcorrect2.replace(/(https?:\/\/[^\s]+)/g, '[посилання заборонено] ');
  let strcorrect4 = strcorrect3.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi, '[контакти заборонені] ');  
  let strcorrect5 = strcorrect4.replace(/([0-9]){4,}/g, ' ');
  let strcorrect6 = strcorrect5.replace(/\s{2}/g, '');  
return strcorrect6
}

console.log(correctString(str))
// ==========================================================================

//Task 14
let str1 = 'Lorem (ipsum)) dolor (()sit, ((amet consectetur(( adipisicing elit.)) (Blanditiis, illo!)'

function balance(str) {
  let openBracket = ''
  let closedBracket = ''
  if (str.indexOf('(') < str.indexOf(')')){
     openBracket = str.match(/\)/g).length
     closedBracket = str.match(/\(/g).length
  }
  else return false

  return openBracket === closedBracket
}

console.log(balance(str1))
// ==========================================================================

//Task 15
function randomPassword() {
  
  let output = "";
 
  do{
  for (let i = 0; i <= 20; i++) {  
    let random1 = Math.floor(Math.random() * 190)    
    if (random1 >= 48 && random1 <= 57 || random1 >= 65 && random1 <= 90 || 
      random1 >= 65 && random1 <= 90 || random1 >= 95 && random1 <= 121) {
    output += String.fromCharCode(random1);    
       }      
   }  
  }
  
  while ((output.length < 7), (output.includes("_") === false))

  let caseCheck  = output.slice(-20,)

  function isUpper(caseCheck){

    if (caseCheck.match(/[A-Z]/g).length > 2 && caseCheck.match(/[0-9]/g).length < 5 && caseCheck.match(/(.)\1\1/g) === null) return caseCheck;
    else return randomPassword();
  }

  return isUpper(caseCheck)  
  }
  
  console.log(randomPassword())
  

// ==========================================================================

//Task 16
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
let arr1 = [-1, 2, 3, -4, 5, 6, 7, -8, 9, 0] 

function sort(arr) {
  if(arr.length < 2) return arr;

  arr.sort((a,b) => a-b)

let less = [];
let greater = [];

for (let i = 0; i < arr.length; i++) {
  
  if (i % 2 == 0) less.push(arr[i]) 
  if (i % 2 !== 0) greater.push(arr[i])  
  
}

return less.concat(greater.reverse())

}

console.log(sort(arr))
console.log(sort(arr1))
// ==========================================================================

