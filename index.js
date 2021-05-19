// Add your functions here

const map = (array, callBackFunc)=>{
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let eachElement = array[i];
    newArray.push(callBackFunc(eachElement));
  }
  return newArray;
};

const reduce = (array, callBackFunc, begin)=>{
  if (begin) {
      let entire = begin;
      for (let i = 0; i < array.length; i++) {
        let eachElement = array[i];
        entire = callBackFunc(entire, eachElement);
      }
      return entire;
  }
  else {
      let total = array[0];
      for (let i = 1; i < arraylength; i++) {
        let eachElement = array[i];
        total = callBackFunc(total,eachElement);
      }
      return total;
  }

};
