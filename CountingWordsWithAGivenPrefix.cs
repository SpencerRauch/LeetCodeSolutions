// https://leetcode.com/problems/counting-words-with-a-given-prefix/

public class Solution {
    public int PrefixCount(string[] words, string pref) 
    {
        int Count = 0;
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length < pref.Length) continue;
            for (int j = 0; j < pref.Length; j++)
            {
                if (words[i][j] != pref[j])
                {
                    break;
                }
                if (j == pref.Length-1)
                {
                    Count++;
                }
            }
        }
        return Count;
    }
}


public class Solution {
    public int PrefixCount(string[] words, string pref) {
        int Count = 0;
        foreach(string word in words){
            if(word.Length >= pref.Length && word.Substring(0,pref.Length) == pref)
            {
                count++;
            }
        }
        return count;
    }
}