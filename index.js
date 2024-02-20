let firstNum = document.querySelector('.first-num')
let secondNum = document.querySelector('.second-num')
let userEnteredNum = document.getElementById("result")
let resultMsg = document.getElementById('message')


let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try again!";

function onRestart() {
    let firstRandomNum = Math.floor(Math.random() * 100)
    let secondRandomNum = Math.ceil(Math.random() * 100)

    firstNum.textContent = firstRandomNum;
    secondNum.textContent = secondRandomNum;

    resultMsg.textContent = ''
    userEnteredNum.value = ''

}
onRestart()

function onCheck() {
    // console.log(firstNum.textContent);
    let firstNumValue = parseInt(firstNum.textContent)
    let secondNumValue = parseInt(secondNum.textContent)

    let result = firstNumValue + secondNumValue;
    // console.log(result);

    let resultFromUser = parseInt(userEnteredNum.value)
    // console.log(resultFromUser);

    if(userEnteredNum.value === '') {
        alert("Enter Valid Number");
        return;
    }

    if(result === resultFromUser){
        resultMsg.textContent = successMessage;
        resultMsg.style.backgroundColor = 'green';
    }else {
        resultMsg.textContent = tryAgainMessage;
        resultMsg.style.backgroundColor = 'blue'
    }

}










