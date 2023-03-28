export const NumberToString = (numb) => {
  let str = numb?.toString().split('').reverse().join('');
  let arr = [];
  for(let i=0; i<str?.length; i+=3) {
    arr.push(str.slice(i, i+3).split('').reverse().join(''))
    // console.log(arr);
  }
  let Result = arr.reverse().join(',');
  return Result;
}