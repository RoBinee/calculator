const numberBtns = document.querySelectorAll(".number");
const result = document.querySelector(".result");
let firstNum = "";
let secondNum = "";
let signInput = "";
let stringOfResult = "";

numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener("click", ()=>{
        // const num = numberBtn.dataset.value;
        const num = numberBtn.textContent;
        if(!signInput){
            firstNum += num;
        }else if(signInput){
            secondNum += num;
        }
        stringOfResult += num;
        //display the result
        result.textContent = stringOfResult;
    })
})

const signBtns = document.querySelectorAll(".sign");

signBtns.forEach((signBtn)=>{
    signBtn.addEventListener("click", ()=>{
        // const sign = signBtn.dataset.value;
        const sign = signBtn.textContent;

        if(typeof firstNum === "string"){
            //if firstNum is existed
            firstNum = Number(firstNum);
        }

        if(firstNum && secondNum){
            //click sign btn after complete writing secondNUm
            secondNum = Number(secondNum);

            //2023.02.02
            //calculate using num1, num2 and signInput
            //save the result in firstNum
            firstNum = operate(signInput, firstNum, secondNum);
            stringOfResult = firstNum;

            if(sign === "equal"){
                secondNum = "";
                signInput = "";
                result.textContent = stringOfResult;
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
            //display the result
            result.textContent = stringOfResult;
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
    //if operator is divide and num2 is 0 -> error!
    const answer = operator(num1, num2);

    if(!Number.isFinite(answer)) return "error!";

    return operator(num1, num2);
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

