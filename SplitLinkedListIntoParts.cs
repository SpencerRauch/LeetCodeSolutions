/**
https://leetcode.com/problems/split-linked-list-in-parts
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode[] SplitListToParts(ListNode head, int k)
    {
        ListNode[] answer = new ListNode[k];
        if (head == null) return answer;
        ListNode runner = head;
        int count = 1;
        while (runner.next != null)
        {
            count++;
            runner = runner.next;
        }
        runner = head;
        if (count < k)
        {   
            int inserted = 0;
            //put in one at a time until we're out
            while(inserted < count)
            {
                answer[inserted] = runner;
                ListNode? next = runner.next;
                runner.next = null;
                runner = next;
                inserted++;
            }
            return answer;
        }
        int baseLength = count / k;
        int leftOvers = count % k;
        count = 0;
        while (count < k)
        {
            answer[count] = runner;
            int curLen = 1;
            for (int i = 0; i < baseLength - 1; i++)
            {
                runner = runner.next;
            }
            if (leftOvers > 0)
            {
                runner = runner.next;
                leftOvers--;
            }
            ListNode next = runner.next;
            runner.next = null;
            runner = next;
            count++;
        }
        return answer;
    }
}