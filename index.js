// Add your functions here

const map = (array, callBackFunc)=>{
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    newArray.push(callBackFunc(element));
  }
  return newArray;
};

const reduce = (array, callBackFunc, begin)=>{
  if (begin) {
      let entire = begin;
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
        entire = callBackFunc(entire, element);
      }
      return entire;
  }
  else {
      let total = array[0];
      for (let i = 1; i < arraylength; i++) {
        let element = array[i];
        total = callBackFunc(total, element);
      }
      return total;
  }

};
