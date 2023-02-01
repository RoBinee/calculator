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
numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener("click", ()=>{
        const num = numberBtn.dataset.value;

        firstNum += num;
        result.textContent = firstNum;
        //if operation is exist..store secondNum
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
            break;
            case "subtract":
                operation = subtract;
            break;
            case "multiply":
                operation = multiply;
            break;
            case "divide":
                operation = divide;
            break;
            case "equal":
                console.log("equal")
            break;
        }
    })
})