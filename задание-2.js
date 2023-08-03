let nums = +prompt('введите любое число:');
function SimpleNumberCheck(num){
    if (num <= 1  || num >= 1000){
      console.log('данные неверны, либо вы ввели 0 или 1');
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            console.log('не являются простым числом');
            return;
        }
    }
    console.log('простое число');
 }
SimpleNumberCheck(nums);