
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

console.log(unionOfSortedArray([1, 2, 3, 4, 5], [1, 2, 7]));

