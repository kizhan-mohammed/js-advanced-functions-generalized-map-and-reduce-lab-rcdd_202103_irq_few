// Add your functions here

const map = (sourceArray, callBackFunc)=>{
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let element = sourceArray[i];
    newArray.push(callBackFunc(element));
  }
  return newArray;
};

const reduce = (sourceArray, callBackFunc, begin)=>{
  if (begin) {
      let entire = begin;
      for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i];
        entire = callBackFunc(entire, element);
      }
      return entire;
  }
  else {
      let total = sourceArray[0];
      for (let i = 1; i < sourceArray.length; i++) {
        let element = sourceArray[i];
        total = fn(total, element);
      }
      return total;
  }

};
