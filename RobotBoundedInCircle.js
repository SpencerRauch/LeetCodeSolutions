/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    let northSouth = 0;
    let eastWest = 0;
    let direction = 0;
    for (char of instructions){
        if (char == 'G'){
            switch(direction){
                case 0:
                    northSouth++;
                    break;
                case 1:
                    eastWest++;
                    break;
                case 2:
                    northSouth--;
                    break;
                case 3:
                    eastWest--;
                    break;
            }
            
        }
        if (char == 'L'){
            if (direction == 0){
                direction = 3;
            } else direction--;
        }
        if (char == 'R'){
            if (direction == 3){
                direction = 0;
            } else direction++;
        }
    }
    if (direction != 0 || northSouth == 0 && eastWest ==0 ){
        return true;
    } else return false;
};


// https://leetcode.com/problems/robot-bounded-in-circle/submissions/