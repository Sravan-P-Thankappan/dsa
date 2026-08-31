// ----------- reverse array using 2 pointer ------------

function reverseArray(ar) {
    i = 0;
    j = ar.length - 1;
    while (i < j) {
        let t = ar[i];
        ar[i] = ar[j];
        ar[j] = t;
        i++
        j--
    }
    return ar;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));


// ------------- reversing an array ---------

/* let ar = [1, 2, 3, 4]

for (let i = 0; i < (ar.length) / 2; i++) {
    let tem = ar[i];
    ar[i] = ar[ar.length - i - 1];
    ar[ar.length - i - 1] = tem;
}

console.log(ar) */


// checking a string is palindrome or not
// two pointer is also used to findout this

function isStringPalindrome(str) {
    let res = true;
    for (let i = 0; i < (str.length) / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            res = false;
            break;
        }
    }
    return res;
}

// console.log(isStringPalindrome('malayalam'));

/* 
function fibonacciSeries(n) {
    if (n == 0) return [0];
    let f = [0, 1];
    if (n == 1) return f;
    for (i = 2; i <= n; i++) {
        f.push(f[i - 2] + f[i - 1]);
    }
    return f;
}


console.log(fibonacciSeries(5));
 */


function nthFibonaci(n) {
    let f = [0, 1];
    for (i = 2; i <= n; i++) {
        f.push(f[i - 2] + f[i - 1]);
    }
    return f[n];
}


// console.log(nthFibonaci(5));


// ------------- move all 1 to left side-----

function moveAllones(ar) {
    let i = 0;
    let j = ar.length - 1;
    while (i <= j) {
        if (ar[i] == 1) {
            i++;
        } else if (ar[j] == 1) {
            let t = ar[j];
            ar[j] = ar[i];
            ar[i] = t;
            j--;
        } else {
            j--;
        }
    }
    return ar;
}

// console.log(moveAllones([1, 2, 3, 4, 1, 5, 6]));


// ----------- sub array of size k with max sum -------
// brute force approach

function maxSumSubarray(ar, k) {
    let finalSubAr = [];
    let finalSum = 0;

    for (let i = 0; i <= ar.length - k; i++) {
        let subAr = [];
        let sum = 0;

        for (let j = i; j < k + i; j++) {
            subAr.push(ar[j]);
            sum += ar[j];
        }

        if (sum > finalSum) {
            finalSum = sum;
            finalSubAr = subAr;
        }
    }

    return finalSubAr;
}

// console.log(maxSumSubarray([4, 5, 9, 0, 7, 1, 9, 0], 3));


// ------------- frequency of number ----------
function frequencyOfNumber(ar, n) {
    let c = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == n) c += 1;
    }
    return c;
}

// console.log(frequencyOfNumber([1, 2, 3, 4, 5, 1], 1));


/* 
Remove All Occurrences of an Element in an Array
 */

function removeAllOccurance(ar, k) {
    let j = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[j] !== k) {
            j++;
        } else if (ar[i] !== k) {
            let t = ar[i];
            ar[i] = ar[j];
            ar[j] = t;
            j++;
        }
    }
    console.log(ar)
    return j;
}

//  console.log(removeAllOccurance([0, 1, 3, 0, 2, 2, 4, 2], 2));


// Reverse a string preserving spaces

function reverseString(str) {
    // Help others
    str = str.split('');
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] == ' ') i++;
        else if (str[j] == ' ') j--;
        else {
            let t = str[i];
            str[i] = str[j];
            str[j] = t;
            i++;
            j--;
        }
    }

    return str.join('')
}

// console.log(reverseString("internship at geeks for geeks"))
