var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    
    let index = 0;
    while (index < version1.length || index < version2.length) {
        const num1 = version1[index] ? parseInt(version1[index]) : 0;
        const num2 = version2[index] ? parseInt(version2[index]) : 0;
        
        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        } else {
            index++;
        }
    }
    
    return 0;
};

// https://leetcode.com/problems/compare-version-numbers