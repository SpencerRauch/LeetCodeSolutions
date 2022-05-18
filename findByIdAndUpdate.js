
   
// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

// check 
// someObj.hasOwnProperty("key")

// Object.keys(someObj) // returns [an array of "keys"]


const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) { 
    let found = false; //this bool will keep track of whether we find a matching object to our search id
    let index = 0 //here we will store the index of our found object

    for (let i = 0; i < collection.length; i++){ //iterate through collection
        let item = collection[i] // item from collection to consider
        if (item.id == id){ // if current item's id is the one we're looking for
            found = true; // set found to true
            index = i; // store the index of this object
            break; // break, no need to search further
        }
    }

    if (found){ // if we have a match
        let updating = collection[index] //our match!
        for (let key in updatedVals){ //iterate through updatedVals obj
            if (updating.hasOwnProperty(key)){ // if the object we're updating has the same key as updatedVals
                updating[key] = updatedVals[key] // update its value to the value in our updatedVals obj
            }
        }
    }
    
    return found ? collection[index] : null; // did we find a match? Return the updated match if so. If not, return null.
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

// --- TEST the following: ---
// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null