// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, node) {
  // your code here

  // base case
  if (node === undefined) {
    node = document.body;
  }
  var classArray = [];
    
  // var list = Array.prototype.slice.call(element.classList, 0);
  var foundName = false;
  
  if (node.classList !== undefined) {
    for (var j = 0; j < node.classList.length; j++) {
      if (className === node.classList[j]) {
        foundName = true;
      }      
    }
  }

  if (foundName === true) {
    classArray.push(node);
  }
  
  for (var i = 0; i < node.childNodes.length; i++) {
    classArray = classArray.concat(getElementsByClassName(className, node.childNodes[i]));
  }

  
  // returns an array with elements with class name

  return classArray;

};
