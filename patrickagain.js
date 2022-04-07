
var operators = []

function generate_operators(arr, partial=""){
    let operators = ['/','+','-','*']
    if (partial.length == 3) {
        arr.push(partial)
        return
    }

    for (let operator of operators){
        generate_operators(arr, partial + operator)
    }
    return arr

}

function generate_number_orders(arr,partial=[])

generate_operators(operators)
console.log(operators)