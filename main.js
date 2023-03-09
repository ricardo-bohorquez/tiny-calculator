const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const dotDecimal = document.getElementById(`decimal`);
const operationBox = document.querySelector(`.operation-label`);
const totalBox = document.querySelector(`.total-label`);
const numberBox = document.querySelector(`.number-box`);
const deleteChar = document.getElementById(`deleteCharacter`);
const deleteAll = document.getElementById(`deleteAll`);
const numbers = [];
const operators = [];
let operands = [];

numberBox.innerHTML = `0`;
operators[0] = document.getElementById(`plus`);
operators[1] = document.getElementById(`minus`);
operators[2] = document.getElementById(`multiply`);
operators[3] = document.getElementById(`divide`);
operators[4] = document.getElementById(`equal`);
numbers[0] = document.getElementById(`zero`);
numbers[1] = document.getElementById(`one`);
numbers[2] = document.getElementById(`two`);
numbers[3] = document.getElementById(`three`);
numbers[4] = document.getElementById(`four`);
numbers[5] = document.getElementById(`five`);
numbers[6] = document.getElementById(`six`);
numbers[7] = document.getElementById(`seven`);
numbers[8] = document.getElementById(`eight`);
numbers[9] = document.getElementById(`nine`);

deleteAll.addEventListener(`click`, () => {
  numberBox.innerHTML = `0`;
  totalBox.innerHTML = ``;
  operationBox.innerHTML = ``;
  operands = [];
});

deleteChar.addEventListener(`click`, () => {
  let valueBoxToString = numberBox.innerHTML.split(``);
  valueBoxToString.pop();
  let valueReduceDigits = valueBoxToString.join(``).toString();
  numberBox.innerHTML = valueReduceDigits;
  numberBox.innerHTML == `NaN` || numberBox.innerHTML == ``
    ? (numberBox.innerHTML = numbers[0].value)
    : {};
});

dotDecimal.addEventListener(`click`, () =>
  numberBox.innerHTML.includes(`.`)
    ? (dotDecimal.value = ``)
    : ((dotDecimal.value = `.`), (numberBox.innerHTML += dotDecimal.value))
);

operators[0].addEventListener(`click`, () => {
  operatorCapture(0, add);
});

operators[1].addEventListener(`click`, () => {
  operatorCapture(1, substract);
});

operators[2].addEventListener(`click`, () => {
  operatorCapture(2, multiply);
});

operators[3].addEventListener(`click`, () => {
  operatorCapture(3, divide);
});

operators[4].addEventListener(`click`, () => {
  clickEqualButton();
});

numbers[0].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[0].value)
    : (numberBox.innerHTML += numbers[0].value)
);
numbers[1].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[1].value)
    : (numberBox.innerHTML += numbers[1].value)
);
numbers[2].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[2].value)
    : (numberBox.innerHTML += numbers[2].value)
);
numbers[3].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[3].value)
    : (numberBox.innerHTML += numbers[3].value)
);
numbers[4].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[4].value)
    : (numberBox.innerHTML += numbers[4].value)
);
numbers[5].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[5].value)
    : (numberBox.innerHTML += numbers[5].value)
);
numbers[6].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[6].value)
    : (numberBox.innerHTML += numbers[6].value)
);
numbers[7].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[7].value)
    : (numberBox.innerHTML += numbers[7].value)
);
numbers[8].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[8].value)
    : (numberBox.innerHTML += numbers[8].value)
);
numbers[9].addEventListener(`click`, () =>
  numberBox.innerHTML == `0`
    ? (numberBox.innerHTML = numbers[9].value)
    : (numberBox.innerHTML += numbers[9].value)
);

const operatorCapture = (optr, funct) => {
  if (!operands[0]) {
    operands[0] = parseFloat(numberBox.innerHTML);
    totalBox.innerHTML = operands[0] + operators[optr].value;
    numberBox.innerHTML = `0`;
  } else if (!operands[1]) {
    operands[1] = parseFloat(numberBox.innerHTML);
    operationBox.innerHTML = operands[0] + operators[optr].value + operands[1];
    operands[2] = funct(operands[0], operands[1]);
    totalBox.innerHTML = operands[2];
    numberBox.innerHTML = `0`;
  } else {
    operands[0] = operands[2];
    operands[1] = parseFloat(numberBox.innerHTML);
    operationBox.innerHTML = operands[0] + operators[optr].value + operands[1];
    operands[2] = funct(operands[0], operands[1]);
    totalBox.innerHTML = operands[2];
    numberBox.innerHTML = `0`;
  }
};

const clickEqualButton = () => {
  let ops = [add, substract, multiply, divide];
  for (let i = 0; i <= 3; i++) {
    if (totalBox.innerHTML.includes(operators[i].value)) {
      operands[1] = parseFloat(numberBox.innerHTML);
      operationBox.innerHTML = operands[0] + operators[i].value + operands[1];
      operands[2] = ops[i](operands[0], operands[1]);
      totalBox.innerHTML = operands[2];
      numberBox.innerHTML = `0`;
    }
  }
};
