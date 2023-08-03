const countEvenOdd = (arr) => {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    let nanCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        if (isNaN(arr[i])) {
          nanCount++;
        } else if (arr[i] === 0) {
          zeroCount++;
        } else if (arr[i] % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    }
  
    console.log(`Четных элементов: ${evenCount}`);
    console.log(`Нечетных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
    console.log(`NaN элементов: ${nanCount}`);
}
  
const array = [1, 2, 3, 4, 5, 0, null, 'a', NaN];
countEvenOdd(array);