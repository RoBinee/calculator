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
        }else if(operation){
            //store second num
            secondNum += num;
        }
        stringOfResult += num;
        result.textContent = stringOfResult;
    })
})

const signBtns = document.querySelectorAll(".sign");
signBtns.forEach((signBtn)=>{
    signBtn.addEventListener("click", ()=>{
        const sign = signBtn.dataset.value;
        if(typeof firstNum === "string"){
            //if firstNum is existed
            firstNum = Number(firstNum);
        }

        if(firstNum && secondNum){
            secondNum = Number(secondNum);

            if(sign === "equal"){
                stringOfResult = operate(operation, firstNum, secondNum);
                result.textContent = stringOfResult;
                initialize()
            }else{
                firstNum = operate(operation, firstNum, secondNum);
                secondNum = "";
                operation = "";

                //don't use dataset, use textcontent

                stringOfResult = firstNum;
                result.textContent = stringOfResult;
            }
            // = -> display the result
            // the others -> continue calculate
        }else{
            switch(sign){
                case "add":
                    operation = add;
                    stringOfResult += " + "
                break;
                case "subtract":
                    operation = subtract;
                    stringOfResult += " - "
                break;
                case "multiply":
                    operation = multiply;
                    stringOfResult += " × "
                break;
                case "divide":
                    operation = divide;
                    stringOfResult += " ÷ "
                break;
            }
            result.textContent = stringOfResult;
        }

        // if(sign === "add"){
        //     operation = add;
        //     stringOfResult += " + "

        // }else if(sign === "subtract"){
        //     operation = subtract;
        //     stringOfResult += " - "

        // }else if(sign === "multiply"){
        //     operation = multiply;
        //     stringOfResult += " × "
            
        // }else if(sign === "divide"){
        //     operation = divide;
        //     stringOfResult += " ÷ "
            
        // }else if(sign === "equal"){
        //     stringOfResult = operate(operation, firstNum, secondNum);
        // }
        //  result.textContent = stringOfResult;
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
    const result = operator(num1, num2);
    return result;
}
function initialize(){
    firstNum = "";
    secondNum = "";
    operation = "";
    stringOfResult = "";
}