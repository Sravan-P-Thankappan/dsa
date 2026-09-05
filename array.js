
function largestNumber(ar) {
    let lNo = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > lNo) lNo = ar[i];
    }

    console.log(lNo)
}

// largestNumber([-7, -9, -3, -10, -2]);

function smallestNumber(ar) {
    let sNo = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] < sNo) sNo = ar[i];
    }

    console.log(sNo)
}

// smallestNumber([-7, -9, -3, -10, -2])

function secondLargestNumber(ar) {
    let large = ar[0]
    let secondLarge = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > large) {
            let t = large;
            large = ar[i];
            secondLarge = t;
        } else if (ar[i] > secondLarge && ar[i] != large) secondLarge = ar[i];

    }

    console.log(secondLarge);
}



// secondLargestNumber([2, 4, 7, 9, 9, 9, 8, 10]);

function secondSmallestNumber(ar) {
    let small = ar[0];
    let secondSmall = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] < small) {
            let t = small;
            small = ar[i];
            secondSmall = t;
        } else if (ar[i] < secondSmall && ar[i] != small) {
            secondSmall = ar[i];
        }
    }

    console.log(secondSmall)
}
// secondSmallestNumber([2, 4, 7, 9, 9, 9, 8, 10, 1, 1, 2])

function isArraySorted(ar) {
    let isSorted = true;

    let isAscending = ar[0] < ar[1];
    if (isAscending) {
        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i] > ar[i + 1]) {
                isSorted = false;
                break;
            }
        }
    } else {
        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i + 1] > ar[i]) {
                isSorted = false;
                break;
            }
        }
    }

    return isSorted;
}


// console.log(isArraySorted([1, 2, 3, 3, 5]));

/* 
remove duplicate and return no of  unique element
*/
// function removeDuplicateFromSortedArray(ar) {
//     let distinctAr = [];
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] == ar[i + 1]) continue;
//         distinctAr.push(ar[i]);
//     }
//     return distinctAr
// }

// console.log(removeDuplicateFromSortedArray([0,0,1,1,1,2,2,3,3,4]))

function removeDuplicates(ar) {
    let j = 0;
    for (let i = 1; i < ar.length; i++) {
        if (ar[j] != ar[i]) {
            ar[j + 1] = ar[i];
            j++
        }
    }
    return j + 1; // no of unique elements
}

// removeDuplicates([0, 0, 3, 3, 5, 6])


/* 
left rotate bt k place (k = 3) [1,2,3,4,5,6,7] [1,2,3,4,5,6]  
can be used for both right and left rotation 
*/
function rotateArray(ar, k) {
    let len = ar.length;
    k = k % len;

    function reverse(i, j) {
        // console.log(i, j)
        while (i < j) {
            let t = ar[i];
            ar[i] = ar[j];
            ar[j] = t;
            i++;
            j--
        }
    }


    reverse(0, len - 1);
    reverse(0, k - 1);
    reverse(k, len - 1);

    console.log(ar)
}

// rotateArray([1, 2, 3, 4, 5, 6], 3);


function unionOfSortedArray(nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let i = 0;
    let j = 0;
    let union = [];


    while (i < l1 && j < l2) {
        if (nums1[i] < nums2[j]) {
            if (nums1[i] != union[union.length - 1]) {
                union[union.length] = nums1[i];
            };
            i++
        }
        else {
            if (nums2[j] != union[union.length - 1]) {
                union[union.length] = nums2[j];
            }
            j++;
        }
    }

    while (i < l1) {
        if (nums1[i] != union[union.length - 1]) {
            union[union.length] = nums1[i]
        };
        i++
    }

    while (j < l2) {
        if (nums2[j] != union[union.length - 1]) {
            union[union.length] = nums2[j]
        };
        j++
    }

    return union;
}

// console.log(unionOfSortedArray([1, 2, 3, 4, 5], [1, 2, 7]));


/* 
Intersection of two sorted arrays.

[1, 2, 2, 3, 3, 4, 5, 6]
[2, 3, 3, 5, 6, 6, 7]

===> [ 2, 3, 3, 5, 6 ]

Two sorted array inter section mean finding the elements that are present in both arrays.
*/

function intersectionOfSortedArrays(nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let i = 0;
    let j = 0;
    let intersection = [];

    while (i < l1 && j < l2) {

        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums2[j] < nums1[i]) {
            j++;
        }
        else {
            intersection.push(nums1[i]);
            i++;
            j++;
        }
    }

    return intersection;
}

// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [2, 3, 5, 7];
// console.log(intersectionOfSortedArrays(arr1, arr2));

/* 
Find the missing number
*/
// Brute force approach

function missingNumberBruteForce(ar) {
    let n = ar.length + 1;
    for (let i = 1; i <= n; i++) {
        let found = false;
        for (let j = 0; j < ar.length; j++) {
            if (ar[j] == i) {
                found = true;
                break;
            }
        }

        if (!found) return i;
    }
}

// console.log(missingNumberBruteForce([1, 2, 3, 5]));

// ------- better approach using hash

function missingNumberUsingHash(ar) {
    let n = ar.length + 1;
    let hash = new Array(n).fill(0);

    for (let i = 0; i < ar.length; i++) {
        hash[ar[i]] += 1;
    }

    for (let i = 1; i <= n; i++) {
        if (hash[i] == 0) {
            return i;
        }
    }
}

// console.log(missingNumberUsingHash([8, 2, 4, 5, 3, 7, 1]));

//  optimal approach

function missingNumber(ar) {
    let n = ar.length + 1;
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    let expectedSum = (n * (n + 1)) / 2

    return expectedSum - sum;
}

// console.log(missingNumber([8, 2, 4, 5, 3, 7, 1]))

/* 
 using XOR operator (^)

 0 ^ 0 = 0
 0 ^ 1 = 1
 1 ^ 0 = 1
 1 ^ 1 = 0

 if the two number are same XOR will result 0 (1^1 =0)
 0 XOR any number results the number itself.

*/
function missingNumberUsingXor(ar) {

    let n = ar.length + 1;
    let xor1 = 0;
    for (let i = 1; i <= n; i++) {
        xor1 ^= i; // 0 ^ 1 ^ 2 ^ ..... ^ n
    }

    let xor2 = 0;
    for (let i = 0; i < ar.length; i++) {
        xor2 ^= ar[i];
    }

    return xor1 ^ xor2; // 1^2^3^4 ^ 1^2^4 (1 xor 1 = 0; 2 xor 2 = 0; 4 xor 4 =0; finally 0 xor 3 = 3 )
}

// console.log(missingNumberUsingXor([8, 2, 4, 5, 3, 7, 1, 6]));


function findMaxConsecutiveOnes(ar) {
    let cnt = 0;
    let max = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == 1) {
            cnt++;
            max = Math.max(max, cnt)
        }
        else {
            cnt = 0;
        }
    }
    return max;
}

// console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]));


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

// console.log(firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28],3))


// ------ Two Sum -------------
/* 
function twoSumBruteForce(ar, t) {

    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = i; j < ar.length; j++) {
            let sum = ar[i] + ar[j];
            if (sum == t) return [i, j];
        }
    }

    return [];

} */

// console.log(twoSumBruteForce([2, 6, 5, 8, 11], 14));

function twoSumBetter(ar, t) { // O(nlogn)

    // create a map and store array values and it's index there.
    const map = new Map();
    for (let i = 0; i < ar.length; i++) {
        map.set(ar[i], i);
    }

    for (let i = 0; i < ar.length; i++) {
        let key = t - ar[i];
        if (map.has(key)) return [i, map.get(key)];
    }
    return [];
}

// console.log(twoSumBetter([2, 6, 5, 8, 11], 14));


//------- for sorted array we can use two pointer approach --------

function twoSumOfSortedArray(ar, t) {
    let i = 0;
    let j = ar.length - 1;
    while (i < j) {
        let sum = ar[i] + ar[j];
        if (sum == t) return [i, j];
        if (sum < t) i++;
        if (sum > t) j--;
    }
    return [];
}

// console.log(twoSumOfSortedArray([2, 5, 6, 8, 11], 14));


// ------------- Sort array of 0,1 and 2 ------------

function sortColorsBeter(ar) {

    let c0 = 0, c1 = 0, c2 = 0;
    // counting total 0, 1 and 2
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == 0) c0++
        if (ar[i] == 1) c1++
        if (ar[i] == 2) c2++

    }
    let j = 0;
    for (let i = 1; i <= c0; i++) {
        ar[j++] = 0;
    }
    for (let i = 1; i <= c1; i++) {
        ar[j++] = 1;
    }
    for (let i = 1; i <= c2; i++) {
        ar[j++] = 2;
    }

    console.log(ar);
}

// sortColorsBeter([1, 2, 0, 0, 2, 1]);

//------ optimal solution will be, using dutch national flag algorithm    (DNF)

function sortColors(ar) {
    let left = 0;
    let mid = 0;
    let right = ar.length - 1;

    while (mid <= right) {
        if (ar[mid] == 0) {
            let t = ar[left];
            ar[left] = ar[mid];
            ar[mid] = t;
            left++;
            mid++;
        } else if (ar[mid] == 1) {
            mid++;
        } else {
            let t = ar[right];
            ar[right] = ar[mid];
            ar[mid] = t;
            right--;
        }
    }

    console.log(ar);
}

// sortColors([2, 0, 2, 1, 1, 0]);

// ---------- Majority Element (> than N/2) --------

function majorityElemBF(ar) {
    for (let i = 0; i < ar.length; i++) {
        let c = 0;
        for (let j = 0; j < ar.length; j++) {
            if (ar[i] == ar[j]) c++;
        }
        if (c > (ar.length / 2)) {
            return ar[i];
        }
    }

}

// console.log(majorityElemBF([2, 2, 1, 1, 1, 2, 2]));

//--------- Moore voting algorithm  ------------------
function majorityElement(ar) {

    let candidate = null;
    let vote = 0;
    for (let i = 0; i < ar.length; i++) {
        if (vote == 0) {
            candidate = ar[i]
        } else if (ar[i] == candidate) {
            vote++;
        } else {
            vote--
        }
    }

    let candidateCount = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == candidate) candidateCount++;
    }
    if (candidateCount > (ar.length / 2)) return candidate;
}


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));