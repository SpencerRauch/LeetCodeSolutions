/* Use each of the numbers 1, 3, 4, and 6 exactly once with any
of the four basic math operations (addition, subtraction,
multiplication, and division) to total 24. Each number must be
used once and only once, and you may define the order of
operations; for example, 3 * (4 + 6) + 1 = 31 is valid, however
incorrect, since it doesn’t total 24. */

function generateAnagrams(str, solutions = [], partial = "") {
    if (!str) {
        solutions.push(partial);
    }

    for (let i = 0; i < str.length; i++) {
        const leftSlice = str.slice(0, i);
        const rightSlice = str.slice(i + 1); // skips current letter
        generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
}
var numbers = generateAnagrams("1346");

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

generate_operators(operators)

function find_answer(numbers, operators){
    for (let number of numbers){
        for (let operator of operators){
            let total = parseInt(number[0])
            let i = 1;
            for (let char of operator){
                switch(char){
                    case '/':
                        total /= parseInt(number[i])
                        break
                    case '+':
                        total += parseInt(number[i]) 
                        break
                    case '*':
                        total *= parseInt(number[i]) 
                        break
                    case '-':
                        total -= parseInt(number[i]) 
                        break
                }
                i++
            }

            if (total == 24) return (operator, number)
        }
    }
    return "it... it's not here"
}

console.log(find_answer(numbers,operators))


/// ITS NOT POSSIBLE PATRICK