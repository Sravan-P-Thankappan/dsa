/* 
------- longest sub array with sum K -------- 
this is brute force approach
*/
function longestSubArray(ar, k) {
    let finalLength = 0
    for (let i = 0; i < ar.length; i++) {
        let sum = 0;
        let len = 0;
        for (let j = i; j < ar.length; j++) {
            sum += ar[j];
            if (sum >= k) break;
        }

        if (sum == k) finalLength = Math.max(finalLength, len);
    }

    return finalLength;
}


// console.log(longestSubArray([5, 4, 2, 3, 1, 1], 3));  //[1,2,3,1,1,1,1,3,3]


// -------------- Two pointer sliding window method. type shrinking-------
function longestSubArrayTwoPointer(ar, k) {

    let sum = 0;
    let len = 0;
    let i = 0;
    let j = 0;

    while (j < ar.length) {

        sum += ar[j];

        while (i <= j && sum > k) {
            sum -= ar[i];
            i++;
        }

        if (sum == k) {
            len = Math.max(len, (j - i) + 1);
        }
        j++;
    }

    return len;

}

// console.log(longestSubArrayTwoPointer([1, 2, 3, 1, 1, 1, 1, 3, 3], 6));



// -----Fixed-size Sliding Window-------
// . Maximum Sum Subarray of Size K

function maxSumSubarray(ar, k) {

    let windowSum = 0;
    let maxSum = 0;

    // current window
    for (let i = 0; i < k; i++) {
        windowSum += ar[i];
    }

    maxSum = windowSum;

    for (let i = k; i < ar.length; i++) {
        windowSum += ar[i] - ar[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2],3));



// First Negative Number in Every Window of Size K

function firstNegativeNumber(ar, k) {

    let negative = [];
    for (let i = 0; i < k; i++) {
        if (ar[i] < 0) {
            negative.push(ar[i]);
            break;
        }
    }

    for (let i = k; i < ar.length; i++) {
        let j = (i - k) + 1;
        let noNeg = true;
        while (j <= i) {
            if (ar[j] < 0) {
                negative.push(ar[j]);
                noNeg = false;
                break;
            }
            j++;
        }
        if (noNeg) negative.push(0);
    }

    return negative;
}

// An optimal approach is there with window and deque

// console.log(firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28],3))


function maximumElementInSubarray(ar, k) {

    let maximum = [];

    let windowMax = 0;
    for (let i = 0; i < k; i++) {
        windowMax = Math.max(windowMax, ar[i]);
    }
    maximum.push(windowMax);
    windowMax = 0;
    for (let i = k; i < ar.length; i++) {
        let j = (i - k) + 1;
        while (j <= i) {
            windowMax = Math.max(windowMax, ar[j]);
            j++;
        }
        maximum.push(windowMax);
        windowMax = 0;
    }

    return maximum;
}
// An optimal approach is there with window and deque
console.log(maximumElementInSubarray([2, 1, 3, 4, 2], 3));