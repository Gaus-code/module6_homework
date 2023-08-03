function showNumbers(numOne, numTwo){
    let start = numOne;
    let getResult = setInterval(function(){
        console.log(start);
        if (start === numTwo){
            clearInterval(getResult);
        }
        start++;
    }, 1000);
}
showNumbers(5,15);
