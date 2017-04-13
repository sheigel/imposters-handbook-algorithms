const list = [4,8,15,16,23,42];

const search = (list, lookFor) => {
  //define the range
  var min=0, max=list.length;
  var middle;
  //while there is something to search for...
  while(min <= max){
    //define the middle of the range
    middle = Math.floor((min + max) / 2);
         console.log(min, max, middle)
   //if we've landed on it...
    if(list[middle] === lookFor){
      return middle;
    }else{
      //if we haven't landed on it, where is it?
      //if the middle is less than the value we're
      //looking for, reset the min
      //otherwise reset the max
      list[middle] < lookFor ? min=middle : max=middle;
    }
  }
  return -1;
};

console.log(search(list,3));

assert.equal(search([0, 1,2,3], 0), 0)
assert.equal(search([0, 1,2,3], 3), 3)

assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 43), 8)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 20), 6)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 11), 5)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 9), 4)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 8), 3)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 2), 0)