// Add your functions here

const map = (array, fn)=>{
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    newArray.push(fn(element));
  }
  return newArray;
};

const reduce = (array, fn, begin)=>{
  if (begin) {
      let entire = begin;
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
        entire = fn(entire, element);
      }
      return entire;
  }
  else {
      let total = array[0];
      for (let i = 1; i < array.length; i++) {
        let element = array[i];
        total = fn(total, element);
      }
      return total;
  }

};
