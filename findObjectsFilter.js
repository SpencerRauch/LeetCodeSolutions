// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    let filtered = [] 
    for (let obj of items){
        let match = true
        for (let key in searchObj){
            if (searchObj[key] != obj[key]){
                match = false
            }
        }
        if (match) filtered.push(obj)
    }
    return filtered
}

function findObjectsFilter2(searchObj, items){
    return items.filter(item =>{
        let match = true
        for (let key in searchObj){
            if (searchObj[key] != item[key])
            match = false
        }
        return match
    })
}

console.log(findObjectsFilter2(searchFor2,items))


