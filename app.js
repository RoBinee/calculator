const numberBtns = document.querySelectorAll(".number");
const result = document.querySelector(".result");
let firstNum = "";
let secondNum = "";
let signInput = "";
let stringOfResult = "";
let decimalPointFlag = false;

numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener("click", ()=>{
        const num = numberBtn.textContent;
        typingNumber(num);
     })
})

function typingNumber(num){
    if(num === "."){
        if(decimalPointFlag){
            //you already put . and try to put more in one number
            return;
        }
        decimalPointFlag = true;
    }

    if(!signInput){
        firstNum += num;
    }else if(signInput){
        secondNum += num;
    }
    stringOfResult += num;
    displayResult();
}

const signBtns = document.querySelectorAll(".sign");

signBtns.forEach((signBtn)=>{
    signBtn.addEventListener("click", ()=>{
        const sign = signBtn.textContent;

        decimalPointFlag = false;
        if(firstNum && secondNum){
            //2023.02.02
            //calculate using num1, num2 and signInput
            //save the result in firstNum
            firstNum = operate(signInput, firstNum, secondNum);
            stringOfResult = firstNum;
            if(sign === "="){
                secondNum = "";
                signInput = "";
                displayResult();
                return;
            }else{
                secondNum = "";
            }
        }

        switch(sign){
            case "+":
                signInput = add;
                stringOfResult += " + "
            break;
            case "-":
                signInput = subtract;
                stringOfResult += " - "
            break;
            case "×":
                signInput = multiply;
                stringOfResult += " × "
            break;
            case "÷":
                signInput = divide;
                stringOfResult += " ÷ "
            break;
        }
            displayResult();
    })
})


const add = (num1, num2)=>{
    return num1 + num2;
}

const subtract = (num1, num2)=>{
    return num1 - num2;
}

const multiply = (num1, num2)=>{
    return num1 * num2;
}

const divide = (num1, num2)=>{
    return num1 / num2;
}

function operate(operator, num1, num2){
    //convert to number all
    num1 = Number(num1);
    num2 = Number(num2);

    //answer is number
    let answer = operator(num1, num2);
    //if operator is divide and num2 is 0 -> error!
    if(!Number.isFinite(answer)) return "error!";

    if(!Number.isInteger(answer)){
        //it answer is float
        //make number to string and split it by "."
        let stringAnswer = answer.toString();
        let answerArr = stringAnswer.split(".");
        if(answerArr[1].length > 10){
            //check if the decimal place is over 11
            answer = answer.toFixed(10);
        }
    }
    //if answer is integer, it needs to be converted as string
    return answer.toString();
}


const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", initialize)

function initialize(){
    firstNum = "";
    secondNum = "";
    signInput = "";
    stringOfResult = "";
    result.textContent = stringOfResult;
}

const backSpaceBtn = document.querySelector(".backspace");

backSpaceBtn.addEventListener("click", ()=>{
    // firstNum and stringOfResult should be string for slice func
    if(!signInput && !secondNum){
        //backspace firstNum
        removeLastChar("first");
    }else if(signInput && !secondNum){
        //backspace signInput
        signInput = "";
        stringOfResult = firstNum;
    }else if(signInput && secondNum){
        //backspace secondNum
        removeLastChar("second");
    }
    displayResult()
})

function removeLastChar(numberName){
    if(numberName === "first"){
        firstNum = firstNum.slice(0, -1);
    }else if(numberName === "second"){
        secondNum = secondNum.slice(0, -1);
    }
    stringOfResult = stringOfResult.slice(0, -1);
}

function displayResult(){
    result.textContent = stringOfResult;
    return;
}

// when press a key
window.addEventListener("keydown", (e)=>{
    const num = e.key;
    typingNumber(num);
})