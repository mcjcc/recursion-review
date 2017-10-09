// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // start with primitives
    // str
    // number
    // undefined
    // null
    // boolean
    // array
    // object

  // base case
  if (obj === null) {
    return 'null';
  }

  if (obj === undefined) {
    return 'undefined';
  }

  if (obj.constructor === String) { 
    return '"' + obj + '"';
  }
  
  if (obj.constructor === Number || obj.constructor === Boolean) {
    return '' + obj; 
  }

  if (obj.constructor === Function) {
    return '';
  }

  if (obj.constructor === Array) {
    var recursiveStringifies = [];
    if (obj.length === 0) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        recursiveStringifies.push(stringifyJSON(obj[i]));
      }
    }  
    return '[' + recursiveStringifies + ']'; 
  }

  if (obj.constructor === Object) {
    var recursiveStringifies = [];
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        
        //stringify the key with recursive step
        //concatonate with a :
        //concat with stringify of value with recursive step
        //push this key:value to our array
        if (key !== null && (key === undefined || key.constructor === Function)) {
          continue;
        }
        if (obj[key] !== null && (obj[key] === undefined || obj[key].constructor === Function)) {
          continue;
        } else {

          var tempString = '';
        
          tempString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          recursiveStringifies.push(tempString);
        }
      }
    }
    return '{' + recursiveStringifies + '}';
  }




  

  // action case
  // recursive case
};
