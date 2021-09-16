function validityChecker(x1,y1,x2,y2) {
 
  result(x1,y1,0,0);
  result(x2,y2,0,0);
  result(x1,y1,x2,y2);
  
  function result(x1,y1,x2,y2){
    let distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    let isValid = '';
    if (Number.isInteger(distance)) {
        isValid = 'valid';
    } else {
        isValid = 'invalid';
    }
 
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);  }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
validityChecker(2, "0", 0, 4);