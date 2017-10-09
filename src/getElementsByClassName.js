// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  // your code here

  // base case
  var body = document.body;

  var classArray = [];

  var getElements = function(element) {
    
    // var list = Array.prototype.slice.call(element.classList, 0);
    var foundName = false;
    
    if (element.classList !== undefined) {
      for (var j = 0; j < element.classList.length; j++) {
        if (className === element.classList[j]) {
          foundName = true;
        }      
      }
    }

    if (foundName === true) {
      classArray.push(element);
    }
    
    for (var i = 0; i < element.childNodes.length; i++) {
      getElements(element.childNodes[i]);
    }
  };

  getElements(body);
  
  // returns an array with elements with class name

  return classArray;

};
