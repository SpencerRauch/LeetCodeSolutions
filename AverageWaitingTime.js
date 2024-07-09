// https://leetcode.com/problems/average-waiting-time/

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {

    //start time at first customer arrival
    let time = customers[0][0]
    //keep track of time spent waiting
    let wait_time = 0
    //iterate customers
    for (let customer of customers){
        //deconstruct semantic variable names from customer
        [arrival, order_duration] = customer
        //fast forward to this customer's arrival
        if (arrival > time){
            time = arrival
        }
        //time passes as the order is cooked
        time += order_duration
        //add current wait to total customer wait time
        wait_time += (time - arrival)
    }
    //return average
    return wait_time / customers.length
};