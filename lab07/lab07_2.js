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

//----------Exercise 2.4 ---------//
function sum(arrNum) {
  return arrNum.reduce((accumulator, currentValue) => accumulator + currentValue
  );
}

console.log("Expected output of sum([1,2,3,4,5]) is 15 " + myFunctionTest(15, function(){
  return sum([1,2,3,4,5]);
}))
//------------------------------//

//----------Exercise 2.4 ---------//
function mutilply(arrNum) {
  return arrNum.reduce((accumulator, currentValue) => accumulator*currentValue
  );
}

console.log("Expected output of mutilply([1,2,3,4,5]) is 120 " + myFunctionTest(120, function(){
  return mutilply([1,2,3,4,5]);
}))
//------------------------------//

//----------Exercise 2.5 ---------//
function reverse(s) {
  let arrChar = s.split("");

  return arrChar.reduce((accumulator, currentValue) => currentValue + accumulator
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest("jag testar", function(){
  return reverse("ratset gaj");
}))
//------------------------------//

//----------Exercise 2.7 ---------//
function filterLongWords(arrWords,i) {
  return arrWords.filter(s => s.length > i
  );
}

console.log("Expected output of filterLongWords(['Welcome','to','Maharahishi','University'], 9) is ['Maharahishi','University'] " + myFunctionTest(["Maharahishi","University"], function(){
  return filterLongWords(["Welcome","to","Maharahishi","University"],9);
}))
//------------------------------//