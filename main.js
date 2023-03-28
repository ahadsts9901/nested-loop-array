// add 4

function add(event) {
    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
    x1 = Number(x1)
    let x2 = document.getElementById('x2').value
    x2 = Number(x2)
    let x3 = document.getElementById('x3').value
    x3 = Number(x3)
    let x4 = document.getElementById('x4').value
    x4 = Number(x4)
    let x5 = document.getElementById('x5').value
    x5 = Number(x5)
    let x6 = document.getElementById('x6').value
    x6 = Number(x6)
    let x7 = document.getElementById('x7').value
    x7 = Number(x7)
    let x8 = document.getElementById('x8').value
    x8 = Number(x8)
    let x9 = document.getElementById('x9').value
    x9 = Number(x9)
    let x10 = document.getElementById('x10').value
    x10 = Number(x10)
    let x11 = document.getElementById('x11').value
    x11 = Number(x11)
    let x12 = document.getElementById('x12').value
    x12 = Number(x12)
    let x13 = document.getElementById('x13').value
    x13 = Number(x13)
    let x14 = document.getElementById('x14').value
    x14 = Number(x14)
    let x15 = document.getElementById('x15').value
    x15 = Number(x15)
    let x16 = document.getElementById('x16').value
    x16 = Number(x16)

    let value = document.getElementById('value').value
    value = Number(value)

    let result = ""

    let matrix = [
        [x1, x2, x3, x4],
        [x5, x6, x7, x8],
        [x9, x10, x11, x12],
        [x13, x14, x15, x16]
    ]


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++)

            // result = matrix[i][j] + value

            result += (matrix[i][j] + value) + ", " + ""

        document.getElementById('result').innerHTML = result

    }


}

// subtract 4


function subtract(event) {
    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
    x1 = Number(x1)
    let x2 = document.getElementById('x2').value
    x2 = Number(x2)
    let x3 = document.getElementById('x3').value
    x3 = Number(x3)
    let x4 = document.getElementById('x4').value
    x4 = Number(x4)
    let x5 = document.getElementById('x5').value
    x5 = Number(x5)
    let x6 = document.getElementById('x6').value
    x6 = Number(x6)
    let x7 = document.getElementById('x7').value
    x7 = Number(x7)
    let x8 = document.getElementById('x8').value
    x8 = Number(x8)
    let x9 = document.getElementById('x9').value
    x9 = Number(x9)
    let x10 = document.getElementById('x10').value
    x10 = Number(x10)
    let x11 = document.getElementById('x11').value
    x11 = Number(x11)
    let x12 = document.getElementById('x12').value
    x12 = Number(x12)
    let x13 = document.getElementById('x13').value
    x13 = Number(x13)
    let x14 = document.getElementById('x14').value
    x14 = Number(x14)
    let x15 = document.getElementById('x15').value
    x15 = Number(x15)
    let x16 = document.getElementById('x16').value
    x16 = Number(x16)

    let value = document.getElementById('value').value
    value = Number(value)

    let result = ""

    let matrix = [
        [x1, x2, x3, x4],
        [x5, x6, x7, x8],
        [x9, x10, x11, x12],
        [x13, x14, x15, x16]
    ]


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++)

            // result = matrix[i][j] - value

            result += (matrix[i][j] - value) + ", " + ""

        document.getElementById('result').innerHTML = result

    }


}

// multiply 4

function multiply(event) {
    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
    x1 = Number(x1)
    let x2 = document.getElementById('x2').value
    x2 = Number(x2)
    let x3 = document.getElementById('x3').value
    x3 = Number(x3)
    let x4 = document.getElementById('x4').value
    x4 = Number(x4)
    let x5 = document.getElementById('x5').value
    x5 = Number(x5)
    let x6 = document.getElementById('x6').value
    x6 = Number(x6)
    let x7 = document.getElementById('x7').value
    x7 = Number(x7)
    let x8 = document.getElementById('x8').value
    x8 = Number(x8)
    let x9 = document.getElementById('x9').value
    x9 = Number(x9)
    let x10 = document.getElementById('x10').value
    x10 = Number(x10)
    let x11 = document.getElementById('x11').value
    x11 = Number(x11)
    let x12 = document.getElementById('x12').value
    x12 = Number(x12)
    let x13 = document.getElementById('x13').value
    x13 = Number(x13)
    let x14 = document.getElementById('x14').value
    x14 = Number(x14)
    let x15 = document.getElementById('x15').value
    x15 = Number(x15)
    let x16 = document.getElementById('x16').value
    x16 = Number(x16)

    let value = document.getElementById('value').value
    value = Number(value)

    let result = ""

    let matrix = [
        [x1, x2, x3, x4],
        [x5, x6, x7, x8],
        [x9, x10, x11, x12],
        [x13, x14, x15, x16]
    ]


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++)

            // result = matrix[i][j] * value

            result += (matrix[i][j] * value) + ", " + ""

        document.getElementById('result').innerHTML = result

    }


}

// divide 4

function divide(event) {
    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
    x1 = Number(x1)
    let x2 = document.getElementById('x2').value
    x2 = Number(x2)
    let x3 = document.getElementById('x3').value
    x3 = Number(x3)
    let x4 = document.getElementById('x4').value
    x4 = Number(x4)
    let x5 = document.getElementById('x5').value
    x5 = Number(x5)
    let x6 = document.getElementById('x6').value
    x6 = Number(x6)
    let x7 = document.getElementById('x7').value
    x7 = Number(x7)
    let x8 = document.getElementById('x8').value
    x8 = Number(x8)
    let x9 = document.getElementById('x9').value
    x9 = Number(x9)
    let x10 = document.getElementById('x10').value
    x10 = Number(x10)
    let x11 = document.getElementById('x11').value
    x11 = Number(x11)
    let x12 = document.getElementById('x12').value
    x12 = Number(x12)
    let x13 = document.getElementById('x13').value
    x13 = Number(x13)
    let x14 = document.getElementById('x14').value
    x14 = Number(x14)
    let x15 = document.getElementById('x15').value
    x15 = Number(x15)
    let x16 = document.getElementById('x16').value
    x16 = Number(x16)

    let value = document.getElementById('value').value
    value = Number(value)

    let result = ""

    let matrix = [
        [x1, x2, x3, x4],
        [x5, x6, x7, x8],
        [x9, x10, x11, x12],
        [x13, x14, x15, x16]
    ]


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++)

            // result = matrix[i][j] / value

            result += (matrix[i][j] / value) + ", " + ""

        document.getElementById('result').innerHTML = result

    }


}