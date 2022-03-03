const inputNumber = document.querySelectorAll('.input-count');
const plusBtn = document.querySelectorAll('.btn-pluss');
const minusBtn = document.querySelectorAll('.btn-minus');

var count = 0;
console.log(inputNumber);
for (let index = 0; index < plusBtn.length; index++) {
    plusBtn[index].addEventListener('click', function(){
        count = count + 1 ;
        inputNumber[index].value = Number(inputNumber[index].value) + Number(1)
        console.log(inputNumber[index].value);
    })
}

for (let index = 0; index < plusBtn.length; index++) {
    minusBtn[index].addEventListener('click', function(){
        count = count - 1 ;
        inputNumber[index].value = Number(inputNumber[index].value) - Number(1)
        if( inputNumber[index].value < 0 ){
            inputNumber[index].value = 0
        }
    })
}

// console.log(count);