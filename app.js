//add subtract multiply divide
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
    console.log(operator(num1, num2));
}


// Press a number button
// Display the number on the screen
// When you press a operator button, stop and convert it to string
// Store the value in variable
const numberBtns = document.querySelectorAll(".number");
const result = document.querySelector(".result");
let firstNum = "";
let secondNum = "";
let operation = "";
let stringOfResult = "";
numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener("click", ()=>{
        const num = numberBtn.dataset.value;
        if(!operation){
            firstNum += num;
            // stringOfResult += num;
            // result.textContent = firstNum;
        }else if(operation){
            //store second num
            secondNum += num;
            // stringOfResult += num;
            // result.textContent = secondNum;
        }
        stringOfResult += num;
        result.textContent = stringOfResult;
    })
})

const signBtns = document.querySelectorAll(".sign");
signBtns.forEach((signBtn)=>{
    signBtn.addEventListener("click", ()=>{
        const sign = signBtn.dataset.value;
        if(firstNum){
            //if firstNum is existed
            firstNum = Number(firstNum);
        }
        switch(sign){
            case "add":
                operation = add;
                stringOfResult += "+"
                result.textContent = stringOfResult;
            break;
            case "subtract":
                operation = subtract;
                stringOfResult += "-"
                result.textContent = stringOfResult;
            break;
            case "multiply":
                operation = multiply;
                stringOfResult += "×"
                result.textContent = stringOfResult;
            break;
            case "divide":
                operation = divide;
                stringOfResult += "÷"
                result.textContent = stringOfResult;
            break;
            case "equal":
                console.log("equal");
            break;
        }
    })
})