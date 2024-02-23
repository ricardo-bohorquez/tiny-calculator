const add = (a: number, b: number) => {
  return a + b
}
const substract = (a: number, b: number) => {
  return a - b
}
const multiply = (a: number, b: number) => {
  return a * b
}
const divide = (a: number, b: number) => {
  return a / b
}

type NumOrUndef = number | undefined
type FuncOrUndef = Function | undefined

const operationBox = document.querySelector('.operation-box') as HTMLLabelElement
const totalBox = document.querySelector('.total-box') as HTMLLabelElement
const numberBox = document.querySelector('.number-box') as HTMLLabelElement
const dotDecimal = document.getElementById('decimal') as HTMLButtonElement
const deleteChar = document.getElementById('deleteCharacter') as HTMLButtonElement
const deleteAll = document.getElementById('deleteAll') as HTMLButtonElement
let ans: NumOrUndef = undefined
let op1: NumOrUndef = undefined
let op2: NumOrUndef = undefined
let result: NumOrUndef = undefined
let resultFixed: NumOrUndef = undefined
let prevFunc: FuncOrUndef = undefined
let equalIsClicked = false
let prevOp = ''
numberBox.innerHTML = '0'

const numbersElements = [
  document.getElementById('zero') as HTMLButtonElement,
  document.getElementById('one') as HTMLButtonElement,
  document.getElementById('two') as HTMLButtonElement,
  document.getElementById('three') as HTMLButtonElement,
  document.getElementById('four') as HTMLButtonElement,
  document.getElementById('five') as HTMLButtonElement,
  document.getElementById('six') as HTMLButtonElement,
  document.getElementById('seven') as HTMLButtonElement,
  document.getElementById('eight') as HTMLButtonElement,
  document.getElementById('nine') as HTMLButtonElement
]

const numbers = [
  +numbersElements[0].value,
  +numbersElements[1].value,
  +numbersElements[2].value,
  +numbersElements[3].value,
  +numbersElements[4].value,
  +numbersElements[5].value,
  +numbersElements[6].value,
  +numbersElements[7].value,
  +numbersElements[8].value,
  +numbersElements[9].value
]

const operators = [
  document.getElementById('plus') as HTMLButtonElement,
  document.getElementById('minus') as HTMLButtonElement,
  document.getElementById('multiply') as HTMLButtonElement,
  document.getElementById('divide') as HTMLButtonElement,
  document.getElementById('equal') as HTMLButtonElement
]

deleteAll.addEventListener('click', () => {
  op1 = undefined 
  op2 = undefined
  ans = undefined
  result = undefined
  resultFixed = undefined
  prevFunc = undefined
  prevOp = ''
  numberBox.innerHTML = '0'
  totalBox.innerHTML = ''
  operationBox.innerHTML = '' 
})

deleteChar.addEventListener('click', () => {
  let valueBoxToString = numberBox.innerHTML.split('')
  valueBoxToString.pop()
  let valueReduceDigits = valueBoxToString.join('').toString()
  numberBox.innerHTML = valueReduceDigits
  numberBox.innerHTML === 'NaN' || numberBox.innerHTML === ''
    ? (numberBox.innerHTML = '0')
    : {}
})

dotDecimal.addEventListener('click', () =>
  numberBox.innerHTML.includes('.')
    ? (dotDecimal.value = '')
    : ((dotDecimal.value = '.'), (numberBox.innerHTML += dotDecimal.value))
)

const makeOperation = (s:string, f: Function) => {
  if(prevFunc !== undefined) result = prevFunc(op1, op2)
    else result = f(op1, op2)
    if(result !== undefined){
      resultFixed = Number(result.toFixed(4))
      operationBox.innerHTML = `${op1}${prevOp}${op2}`
      totalBox.innerHTML = `${resultFixed} ${s}`
      numberBox.innerHTML = '0'
      ans = resultFixed
      prevFunc = f
      prevOp = s
    }
}

const operatorCapture = (symbol: string, funct: Function) => {
  if(op1 === undefined && op2 === undefined  && symbol === '-' && numberBox.innerHTML === '0') {
    numberBox.innerHTML = `-`
  } else if(op1 === undefined && op2 === undefined) {
    op1 = Number(numberBox.innerHTML)
    numberBox.innerHTML = '0'
    operationBox.innerHTML = `${op1}${symbol}`
    prevFunc = funct
    prevOp = symbol
  } else if (typeof op1 === typeof 1 && op2 === undefined) {
    op2 = Number(numberBox.innerHTML)
    makeOperation(symbol, funct)
  } else if (typeof op1 === typeof op2) {
    op1 = ans
    op2 = Number(numberBox.innerHTML)
    makeOperation(symbol, funct)
  }
}

const clickEqualButton = () => {
  // equalIsClicked = !equalIsClicked
  // if(typeof op1 === typeof 1 && op2 === undefined) {
  //   op2 = Number(numberBox.innerHTML)
  //   if(prevFunc !== undefined) {
  //     result = prevFunc(op1, op2)
  //     result !== undefined ? resultFixed = Number(result.toFixed(4)) : {}
  //     operationBox.innerHTML = `${op1}${prevOp}${op2}`
  //     totalBox.innerHTML = `${resultFixed}`
  //     numberBox.innerHTML = '0'
  //     ans = resultFixed
  //     result = undefined
  //     resultFixed = undefined
  //     prevFunc = undefined
  //     prevOp = ''
  //   }
  // } else if (typeof op1 === typeof op2) {
  //   op1 = ans
  //   op2 = Number(numberBox.innerHTML)
  // }
}

operators[0].addEventListener('click', () => {
  operatorCapture('+', add)
})

operators[1].addEventListener('click', () => {
  operatorCapture('-', substract)
})

operators[2].addEventListener('click', () => {
  operatorCapture('*', multiply)
})

operators[3].addEventListener('click', () => {
  operatorCapture('/', divide)
})

operators[4].addEventListener('click', () => {
  clickEqualButton()
})

numbersElements[0].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[0]}`)
    : (numberBox.innerHTML += `${numbers[0]}`)
)
numbersElements[1].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[1]}`)
    : (numberBox.innerHTML += `${numbers[1]}`)
)
numbersElements[2].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[2]}`)
    : (numberBox.innerHTML += `${numbers[2]}`)
)
numbersElements[3].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[3]}`)
    : (numberBox.innerHTML += `${numbers[3]}`)
)
numbersElements[4].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[4]}`)
    : (numberBox.innerHTML += `${numbers[4]}`)
)
numbersElements[5].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[5]}`)
    : (numberBox.innerHTML += `${numbers[5]}`)
)
numbersElements[6].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[6]}`)
    : (numberBox.innerHTML += `${numbers[6]}`)
)
numbersElements[7].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[7]}`)
    : (numberBox.innerHTML += `${numbers[7]}`)
)
numbersElements[8].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[8]}`)
    : (numberBox.innerHTML += `${numbers[8]}`)
)
numbersElements[9].addEventListener('click', () =>
  numberBox.innerHTML === '0'
    ? (numberBox.innerHTML = `${numbers[9]}`)
    : (numberBox.innerHTML += `${numbers[9]}`)
)