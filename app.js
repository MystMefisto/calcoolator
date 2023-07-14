//UI elements
const buttons = document.querySelector('.output');
const operations = document.querySelector('.operation-container');
const result = document.querySelector(".actual-number");
//functional buttons
const clearLastOperation = document.querySelector('#clear-button');
const clearAllOperations = document.querySelector('#clearall-button');
const deleteNumber = document.querySelector('#delete-button');
const equalButton = document.querySelector('#equal-button');
const changeSign = document.querySelector('#sign-change-button');
const historyButton = document.querySelector('#history-button');
//sign buttons
const substractSign = document.querySelector('#substraction-button');
const dotSign = document.querySelector('#dot-button');
const sumButton = document.querySelector('#sum-button');

//Internal usage
let internalOperations = [];


buttons.addEventListener('click', e => {
    //Push button animation
    if (e.target.classList.contains('button')) {
        console.log(e.target.textContent);
        e.target.classList.add('click-effect');

        //Adding 

        // Eliminar la clase "click-effect" después de la animación
        e.target.addEventListener('animationend', () => {
            e.target.classList.remove('click-effect');
        });

        //Split every value to generate operations


        //showing operation in operation-container
        let value = e.target.textContent;

        //Verify is a number by regex

        if (verifyNumbers(value)) {
            //Introduce numbers in operation-container
            operations.textContent += value;
            addToInternalOperations(value);
        }

        //Introducing every sign
        if (verifySigns(value)) {
            switch (value) {
                case '+':
                    operations.textContent += '+';
                    break;
                case '-':
                    operations.textContent += '-';
                    break;
                case '÷':
                    operations.textContent += '÷';
                    break;
                case 'x':
                    operations.textContent += 'x';
                    break;
                    //When dot occurs
                case '.':
                    operations.textContent += '.';
                    break;
            }
            addToInternalOperations(value);
        }


        //put operation signs in operation-container


        //Put the operation-container in actual-number

        //result.textContent = operations.textContent;
    }
});

equalButton.addEventListener('click',e=>{
    let value = e.target;
    equal(value);
});

function verifyNumbers(number) {
    return /^\d+$/.test(number);
}

function verifySigns(sign) {
    return /[x\-÷+\.]/.test(sign);
}

// function verifyPreviusCharacters(){

// }

function addToInternalOperations(characterAdded) {
    let character;
    if (verifyNumbers(characterAdded)) {
        //nexting numbers for operations

        character = Number(characterAdded);
        internalOperations.push(character);
        console.log(`${character} ${typeof character} was added, array is ${internalOperations}`);
    }
    if (verifySigns(characterAdded)) {
        internalOperations.push(characterAdded);
        console.log(`${characterAdded} was added, array is ${internalOperations}`);
    }
}

function equal() {
    //Generating operations 
    //There is a bug of chainning numbers
    let resultado = 0;
    let operacion = "";
    internalOperations.forEach((elemento) => {
        if (typeof elemento === "number") {
          if (operacion === "+") {
            resultado += elemento;
            console.log(operacion);
          } else if (operacion === "-") {
            resultado -= elemento;
            console.log(operacion);
          } else if (operacion === "x") {
            resultado *= elemento;
            console.log(operacion);
          } else if (operacion === "÷") {
            resultado /= elemento;
            console.log(operacion);
          } else {
            resultado = elemento;
            console.log(operacion);
          }
        } else {
          operacion = elemento;
          console.log(operacion);
        }
      });
    
    result.textContent = resultado;
    console.log(operacion)
}