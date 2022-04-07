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

var compareVersion = function(version1, version2) {
    let v1Array = version1.split(".");
    let v2Array = version2.split(".");
    
    let length = Math.max(v1Array.length, v2Array.length);
    
    for (let i = 0; i < length; i++){
        let currentV1 = v1Array[i] ? parseInt(v1Array[i]) : 0
        let currentV2 = v2Array[i] ? parseInt(v2Array[i]) : 0
        
        if (currentV1 < currentV2) return -1
        if (currentV1 > currentV2) return 1
    }
    return 0
};

// https://leetcode.com/problems/compare-version-numbers