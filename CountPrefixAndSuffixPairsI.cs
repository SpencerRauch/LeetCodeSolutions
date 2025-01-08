public class Solution {
    public int CountPrefixSuffixPairs(string[] words) {
        int count = 0;
        for (int i = 0; i < words.Length -1; i++)
        {
            for (int j = i + 1; j < words.Length; j++)
            {
                if (IsBothPrefixAndSuffix(words[i], words[j]))
                {
                    count++;
                }
            }
        }
        return count;
    }

    public bool IsBothPrefixAndSuffix(string fix, string word){
        if (fix.Length > word.Length) return false;
        for (int i = 0; i < fix.Length; i++)
        {
            if(fix[i] != word[i] || fix[i] != word[word.Length - fix.Length + i])
            {
                return false;
            }
        }
        return true;
    }

}