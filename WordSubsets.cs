// https://leetcode.com/problems/word-subsets/

public class Solution {
    public IList<string> WordSubsets(string[] words1, string[] words2)
    {
        List<string> Answer = new();
        int[] Required = new int[26];
        foreach(string s in words2)
        {
            int[] CharMap = new int[26];
            foreach(char c in s)
            {
                CharMap[c-'a']++;
                if (CharMap[c-'a'] > Required[c-'a'])
                {
                    Required[c-'a'] = CharMap[c-'a'];
                }
            }

        }

        foreach(string s in words1)
        {
            int[] CharMap = new int[26];
            foreach(char c in s)
            {
                CharMap[c - 'a']++;
            }
            bool MeetsRequirement = true;
            for(int i = 0; i < 26; i++)
            {
                if (CharMap[i] < Required[i])
                {
                    MeetsRequirement = false;
                    break;
                }
            }
            if (MeetsRequirement)
            {
                Answer.Add(s);
            }
        }

        return Answer;

    }
}