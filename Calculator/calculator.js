var number1 = null
var number2 = null
var result = null
var lastOp = null

function onClick(id) {
    var x
    var displayText = document.getElementById("display").innerText
    


    if(id==1||id==2||id==3||id==4||id==5||id==6||id==7||id==8||id==9||id==0) {
    if(id === "1") {
        x = 1
        console.log("Number 1 key pressed")
    }
    if(id === "2") {
        x = 2
        console.log("Number 2 key pressed")
    }
    if(id === "3") {
        x = 3
        console.log("Number 3 key pressed")
    }
    if(id === "4") {
        x = 4
        console.log("Number 4 key pressed")
    }
    if(id === "5") {
        x = 5
        console.log("Number 5 key pressed")
    }
    if(id === "6") {
        x = 6
        console.log("Number 6 key pressed")
    }
    if(id === "7") {
        x = 7
        console.log("Number 7 key pressed")
    }
    if(id === "8") {
        x = 8
        console.log("Number 8 key pressed")
    }
    if(id === "9") {
        x = 9
        console.log("Number 9 key pressed")
    }
    if(id === "0") {
        x = 0
        console.log("Number 0 key pressed")
    }
    if (displayText == "0") displayText = 0
    if (displayText == "+"|| displayText == "-"|| displayText == "*"|| displayText == "/") displayText = ""
    document.getElementById("display").textContent = displayText + x
    number1 = parseInt(document.getElementById("display").innerText, 10)
    }

    if(id=="+"||id=="-"||id=="*"||id=="/"||id=="calculate") {
        if (number2 != null) {
            if(lastOp == "+") number2 = add(number1,number2)
            if(lastOp == "*") number2 = multiply(number1,number2)
            if(lastOp == "-") number2 = subtract(number1,number2)
            if(lastOp == "/") number2 = divide(number1,number2)
            result = number2
            number1 = null
        }
    if (id === '+' ) {
        if (number2 == null) {
            number2 = number1
            number1 = null
        }
        lastOp = "+"
        document.getElementById("display").textContent = "+"
        console.log('add key!')
    }
    if (id === '-' ) {
        if (number2 == null) {
            number2 = number1
            number1 = null
        }
        lastOp = "-"
        document.getElementById("display").textContent = "-"
        console.log('subtract key!')
    }
    if (id === '*' ) {
        if (number2 == null) {
            number2 = number1
            number1 = null
        }
        lastOp = "*"
        document.getElementById("display").textContent = "*"
        console.log('multiply key!')
    }
    if (id === '/' ) {
        if (number2 == null) {
            number2 = number1
            number1 = null
        }
        lastOp = "/"
        document.getElementById("display").textContent = "/"
        console.log('divide key!')
    }
    if (id === 'calculate') {
        number1=number2
        number2=null
        document.getElementById("display").textContent = result
        console.log('equal key!')
    }
   
}
console.log("1: " + number1)
console.log("2: " + number2)
console.log("result: " + result)

if (id === 'clear') {
    x = null
    displayText = null
    number1 = null
    number2 = null
    result = null
    document.getElementById("display").textContent = "0"
    console.log('clear key!')
}

if (id === 'decimal') {
    console.log('decimal key!')
} 
}

function add(n1,n2) {
    var r = n1+n2
    return r
}

function subtract(n1,n2) {
    var r = n2-n1
    return r
}

function multiply(n1,n2) {
    var r = n1 * n2
    return r
}

function divide(n1,n2) {
    var r = n2 / n1
    return r
}