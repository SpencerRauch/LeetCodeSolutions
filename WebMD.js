/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
function webMD(ailments, meds) { 
    let scores = [] //this array will keep track of how many symptoms each med matches
    let highscore = 0 //this will track the highest amount of matches
    let output = [] //we will push our highest matching meds here

    for ( let i = 0; i < meds.length; i++){ //go through our meds
        let med = meds[i] //this med
        let oneScore = 0; //initialize a score for this med
        for (let symptom of med.treatableSymptoms){ //loop through symptoms this med treats
            if (ailments.includes(symptom)){ //if the symptom is one of our ailments
                oneScore++ //increase the score
            }
        }
        scores[i] = oneScore //store the score for this index in its corresponding index in scores arr 
        highscore = Math.max(oneScore,highscore) //check/update highscore
    }

    for (let i = 0; i < scores.length; i++){ //loop through our scores
        if (scores[i] == highscore){
            output.push(meds[i].name) // push the names of the meds that we scored the highest
        }
    }
    return output //all done!
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));