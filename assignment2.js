//FOREACH
function myEach(array, func) {
  while(index < array.length) {
	//specify what you want to do in func (console.log val, add to array, modify it, etc)
    func(array[index]);
    index++;
  }
}

//MYMAP
function myMap(array, func) {
  var newArray = [];
  
  for(var i = 0; i<array.length;i++) 
  {
    newArray.push(func(array[i])); //passed into func, returns a value, then adds this value to our new array 
  }
  return newArray; //return the array we constructed
}


//MYFILTER
function myFilter(array, func) {
var newArray = [];

for(var i =0; i<array.length;i++) {

//condition in func must be true in order for value to be added to array
  if(func(array[i])) {
    newArray.push(array[i]);
  } 
}
return newArray;
}


//MYSOME
function mySome(array, func) {
  var finalReturn = false; //will be used to return final value. default is false (and can be the return val if condition below isnt true)
  
  for(var i =0; i<array.length;i++)
  {
    //if this condition is satisfied, we break out of the loop
    //we don't care about other values since at least one condition is true
      if(func(array[i])) 
      {
          finalReturn = true;
          break;
      }
  }
  
  return finalReturn;
}


//MYEVERY
function myEvery(array, func) {
  //by default it is true, but it can be changed to false by condition below
  var finalReturn = true; 
  
  for(var i =0; i<array.length;i++)
  {
    //if only one value does not meet condition in func, the entire function returns false
    //therefore, we break out of loop
      if(!func(array[i])) 
      {
        finalReturn = false;
        break;
      }
  }
  return finalReturn;
}


//MYREDUCE
function myReduce(array, func) {
var finalSum = 0; //will be the final value returned

for(var i =0; i<array.length;i++) {
    //adds the sum to the return val specified in func
    finalSum += func(array[i]);
}

return finalSum;
}


//MYINCLUDES
function myIncludes(array, val) {
var returnVal = false;

  for(var i =0; i<array.length;i++) {
      if(array[i] == val) {
        returnVal = true;
        break;
      }
  }
  
return returnVal;
}


//MYINDEXOF
function myIndexOf(array, val) {
var returnVal = -1;

for(var i = 0; i<array.length;i++) {
  if(array[i] == val) {
    returnVal = i;
  }
}

  return returnVal;
}


//MYPUSH
function myPush(array, elementToAdd){ 
array[array.length] = elementToAdd;
}


//MY LAST INDEX OF
function myLastIndexOf(array, val) {
  var finalIndex = -1;

  for(var i =0;i<array.length;i++) {
    if(array[i] == val) {
      finalIndex = i;
    }
  }
  return finalIndex;
}


//MY GRAB KEYS
function grabKeys(obj) {
//gets the keys and stores it as an array
//(: ¿not specified that we couldn't use this specific method? :)
var objArr = Object.getOwnPropertyNames(obj);

//returns the object array
return objArray;
}


//MY GRAB VALUES
function grabValues(obj) {

//gets keys from objects
var objArr = Object.getOwnPropertyNames(obj);

//creates new array based on the length of objArray
var valArray = new Array(objArr.length);

for(var i =0;i<objArr.length;i++) {
  //we can access object values by obj['key'] = value
  //RHS gives us the values from the object through its keys (which we access from objArray)
  //LHS assigns it to the appropriate index in valArray
  valArray[i] = obj[objArr[i]];
}
  return valArray;
}

