/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const entranceStr = `${entrance[0]}x${entrance[1]}`
    const queue = [[...entrance, 0]]
    const visited = new Map();
    while(queue.length){
        const pos = queue.shift()
        const x = pos[0]
        const y = pos[1]
        const steps = pos[2]
        const str = `${x}x${y}`
        if (visited.get(str)) continue;
        visited.set(str,true);
        if (str != entranceStr){
            if(x == 0 || y == 0 || x == maze.length-1 || y == maze[0].length-1){
                return steps
            }
        }
        if( x-1  >= 0 && maze[x-1][y] == "." ){
            queue.push([x-1,y,steps+1])
        }
        if( x+1 < maze.length && maze[x+1][y] == "." ){
            queue.push([x+1,y,steps+1])
        }
        if( y-1  >= 0 && maze[x][y-1] == "." ){
            queue.push([x,y-1,steps+1])
        }
        if( y+1  < maze[0].length && maze[x][y+1] == "." ){
            queue.push([x,y+1,steps+1])
        }

    }
    return -1
};