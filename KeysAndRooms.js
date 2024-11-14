/**
 * https://leetcode.com/problems/keys-and-rooms/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const keys = [rooms[0]]
    const visited = new Set()
    visited.add(0)
    while(visited.size < rooms.length && keys.length > 0){
        let cur = keys.pop()
        for (let key of cur){
            if (!visited.has(key)){
                visited.add(key)
                keys.push(rooms[key])
            }
        }
    }
    return rooms.length == visited.size
};