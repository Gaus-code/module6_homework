function getArgs(numOne){
    return function(numTwo){
        return numOne + numTwo;
    };
}
let getSumm = getArgs(5);
console.log(getSumm(15));
