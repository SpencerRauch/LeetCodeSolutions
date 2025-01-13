///https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int a = 0;
        int b = numbers.Length-1;
        while(a < b)
        {
            int sum = numbers[a] + numbers[b];
            if (sum == target)
            {
                return [a+1,b+1];
            }
            if (sum < target)
            {
                a++;
            }
            else
            {
                b--;
            }
        }
        return [-1,-1];
    }
}