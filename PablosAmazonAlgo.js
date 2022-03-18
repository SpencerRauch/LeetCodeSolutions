// Amazon Music is working on a new feature to pair songs together to
// play while on the bus. The goal of this feature is to select two songs
// ©
// from a list that will end exactlv 30 seconds before the listener reaches
// their stop. You are tasked with writing the method that selects the
// songs from a list. Each song is assigned a unique ID, numbered from 0
// to N-1.

// Assumptions:
// 1. You will pick exactly two songs.
// 2. You cannot pick the same song twice.
// 3. If you have multiple pairs with the same total time, select the pair
// with the longest song.
// 4. There are at least two songs available.
// Write an algorithm to find the IDs of two songs whose combined
// runtime will finish exactly 30 seconds before the bus arrives,
// keeping the original order.

// Input
// The input to the function/method consists of two arguments-
// rideDuration, an integer representing the duration of the ride in
// seconds;
// songDurations, a list of integers representing the duration of the
// songs,
// Output
// Return a pair of integers representing the IDs of two songs whose
// combined runtime will finish exactly 30 seconds before the rider
// reaches their stop. If no such pair is possible, return a pair with <-1,
// -1>.
// Example
// Input;
// rideDuration = 90
// songDurations= [1, 10, 25, 35, 60]
// Output:
// [2, 3]
// Explanation:
// During the ride duration of 90 seconds, the rider listens to the third
// and fourth songs (2nd and 3rd index, respectively) which end exactly
// 30 seconds before the bus arrives at their stop.
// If two songs have the same duration, select the option with the lowest
// index,
const rideDuration1 = 90;
const songDurantions1 = [1, 10, 25, 35, 60];
const expected1 = [2,3];

const rideDuration2 = 120;
const songDurantions2 = [50, 30, 20, 80, 10, 85, 5];
const expected2 = [5,6];

const rideDuration3 = 110;
const songDurantions3 = [10, 30, 50, 50, 20];
const expected3 = [1,2];

function findSongs(rideDuration, songDurations) {
    let target = rideDuration - 30;
    let selections = {};
    let longestDurationInAPair = 0;
    for (let i = 0; i < songDurations.length; i++){
        for (let j = i + 1; j < songDurations.length; j++){
            if (songDurations[i] + songDurations[j] == target){
                if (songDurations[i] > songDurations[j] && !selections[songDurations[i]]){
                    selections[songDurations[i]] = [i,j];
                } else if (!selections[songDurations[j]]){
                    selections[songDurations[j]] = [i,j];
                }

            }
        }
    }
    for (key in selections){
        longestDurationInAPair = key > longestDurationInAPair ? key : longestDurationInAPair;
    }
    return selections[longestDurationInAPair];
}

console.log(findSongs(rideDuration1,songDurantions1))

