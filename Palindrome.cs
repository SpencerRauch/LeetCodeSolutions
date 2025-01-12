public class Solution {
    public bool IsPalindrome(string s) 
    {
        if (string.IsNullOrEmpty(s))
        {
            return true;
        }
        s = s.ToLower();
        int start = 0;
        int end = s.Length-1;
        while (start < end)
        {
            bool charAtStart = char.IsLetterOrDigit(s[start]);
            bool charAtEnd = char.IsLetterOrDigit(s[end]);
            if (!charAtStart) start++;
            if (!charAtEnd) end--;
            if (charAtStart && charAtEnd)
            {
                if (s[start] != s[end])
                {
                    return false;
                }
                start++;
                end--;
            }
        }
        return true;
    }
}