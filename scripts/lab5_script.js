function myFunctionTest(expected, function2test) {
  let result = function2test();

  if(Array.isArray(expected)) {
    expected = expected.toString();
  }

  if(Array.isArray(result)) {
    result = result.toString();
  }

  if(expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED. Expected " + expected + " found " + function2test();
  }
}

//----------Exercise 1 ---------//
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log("Expected output of max(2,5) is 5 " + myFunctionTest(5, function(){
  return max(2,5);
}))

console.log("Expected output of max(7,5) is 7 " + myFunctionTest(7, function(){
  return max(7,5);
}))

console.log("Expected output of max(5,7) is 7 " + myFunctionTest(7, function(){
  return max(5,7);
}))
//------------------------------//

//----------Exercise 2 ---------//
function maxOfThree(num1, num2, num3) {
  return max(max(num1,num2),num3);
}

console.log("Expected output of maxOfThree(2,7,5) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(2,7,5);
}))

console.log("Expected output of maxOfThree(2,5,7) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(2,5,7);
}))

console.log("Expected output of maxOfThree(5,7,2) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(5,7,2);
}))

console.log("Expected output of maxOfThree(5,2,7) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(5,2,7);
}))

console.log("Expected output of maxOfThree(7,2,5) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(7,2,5);
}))

console.log("Expected output of maxOfThree(7,5,2) is 7 " + myFunctionTest(7, function(){
  return maxOfThree(7,5,2);
}))
//------------------------------//

//----------Exercise 3 ---------//
function isVowel(char) {
  let strVowels = "AEIOU";

  if(strVowels.indexOf(char.toUpperCase()) >=0) {
    return true;
  } else {
    return false;
  }
}

console.log("Expected output of isVowel(a) is TRUE " + myFunctionTest(true, function(){
  return isVowel("a");
}))

console.log("Expected output of isVowel(A) is TRUE " + myFunctionTest(true, function(){
  return isVowel("A");
}))

console.log("Expected output of isVowel(b) is FALSE " + myFunctionTest(false, function(){
  return isVowel("b");
}))

console.log("Expected output of isVowel(C) is FALSE " + myFunctionTest(false, function(){
  return isVowel("C");
}))
//------------------------------//

//----------Exercise 4 ---------//
function sum(arrNum) {
  let sum = 0;
  for(let i = 0; i<arrNum.length; ++i) {
    sum += arrNum[i];
  }

  return sum;
}

console.log("Expected output of sum([1,2,3,4,5]) is 15 " + myFunctionTest(15, function(){
  return sum([1,2,3,4,5]);
}))
//------------------------------//

//----------Exercise 5 ---------//
function mutilply(arrNum) {
  let result = 1;
  for(let i = 0; i<arrNum.length; ++i) {
    result *= arrNum[i];
  }

  return result;
}

console.log("Expected output of mutilply([1,2,3,4,5]) is 120 " + myFunctionTest(120, function(){
  return mutilply([1,2,3,4,5]);
}))
//------------------------------//

//----------Exercise 6 ---------//
function reverse(s) {
  let result = "";
  let len = s.length;

  for(let i = 0; i<s.length; ++i) {
    result += s.charAt(len-i-1);
  }

  return result;
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest("jag testar", function(){
  return reverse("ratset gaj");
}))
//------------------------------//

//----------Exercise 7 ---------//
function findLongestWord(arrWords) {
  let maxLen = 0;

  for(let i = 0; i<arrWords.length; ++i) {
    maxLen = max(maxLen,arrWords[i].length);
  }

  return maxLen;
}

console.log("Expected output of findLongestWord(['Welcome','to','Maharahishi','University']) is 11 " + myFunctionTest(11, function(){
  return findLongestWord(["Welcome","to","Maharahishi","University"]);
}))
//------------------------------//

//----------Exercise 8 ---------//
function filterLongWords(arrWords,i) {
  let result = [];

  for(let j = 0; j<arrWords.length; ++j) {
    if(arrWords[j].length > i) {
      result.push(arrWords[j]);
    }
  }

  return result;
}

console.log("Expected output of filterLongWords(['Welcome','to','Maharahishi','University'], 9) is ['Maharahishi','University'] " + myFunctionTest(["Maharahishi","University"], function(){
  return filterLongWords(["Welcome","to","Maharahishi","University"],9);
}))
//------------------------------//

//----------Exercise 9 ---------//
//functional programming: map, filter, reduce can replace many loops 

const a = [1,3,5,3,3];

//translate/map all elements in an array to another set of values
const b = a.map(function(elem, i, array) {
  return elem * 10;
})// [10,30,50,30,30]
console.log(b)

//select elements based on a condition
const c = a.filter(function(elem, i, array) {
  return elem == 3;
});//[3,3,3]
console.log(c);

//return the product of all elements;
const d = a.reduce(function(production, elem, currentIndex, array) {
  return production * elem;
}); //135
console.log(d)
//------------------------------//
