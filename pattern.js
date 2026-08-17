
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

/* let star = '';
let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        // star+='* ';
        process.stdout.write("* ")
    }
    // star+='\n'
    console.log('')
}
// console.log(star) */


// *
// * *
// * * *
// * * * *
// * * * * *

/* for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write('* ');
    }
    console.log('')
} */


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

/* for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(j+' ');
    }
    console.log('')
} */


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

/* for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(i+' ');
    }
    console.log('')
} */



// * * * * *
// * * * *
// * * *
// * *
// *
/* for (let i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        process.stdout.write('* ');
    }
    console.log('');
} */


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

/* let n = 5;
// let dec = 0;
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n - i+1; j++) {
        process.stdout.write(j + ' ');
    }
    // dec++;
    console.log('');
} */


//---- chess board ------
// B W B W B
// W B W B W
// B W B W B
// W B W B W
// B W B W B
/* const n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i % 2 != 0) {
            if (j % 2 != 0) process.stdout.write('B ');
            else process.stdout.write('W ');
        } else {
            if (j % 2 != 0) process.stdout.write('W ');
            else process.stdout.write('B ');
        }
    }
    console.log('');
} */


//--- Pyramid -----
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

/* 
const n = 5;
for (let i = 1; i <= n; i++) {
    // space
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write('  ');
    }

    // star
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write('* ');
    }
    console.log('');
} 
*/

// ---invert pyramid ----
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         * 

/* 
const n = 5;
for (let i = 1; i <= n; i++) {

    // space
    for (let k = 1; k < i; k++) {
        process.stdout.write('  ')
    }

    // star
    for (let j = 1; j <= 2 * n - (2 * i - 1); j++) {
        process.stdout.write('* ');
    }

    console.log('');
} 
*/

//---- diamond---
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         * 

/* const n = 5;
for (let i = 1; i <= 2 * n; i++) {

    if (i <= (2*n)/2) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write('  ');
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            process.stdout.write('* ');

        }
    } else {
        for (let j = 1; j < i - n; j++) {
            process.stdout.write('  ');
        }
        for (let k = 1; k <= 2 * n - (2 * (i - n) - 1); k++) {
            process.stdout.write('* ');
        }
    }
    console.log('')
} 
*/


//---

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

/* const n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {

    if (i <= (2 * n) / 2) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write('* ')
        }
    } else {
       for(j=n; j>i-n; j--) {
        process.stdout.write('* ')
       }
    }

    console.log('')
}
 */


// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 
/* const n = 5;
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        if (i % 2 != 0) {
            if (j % 2 != 0) process.stdout.write('1 ');
            else process.stdout.write('0 ');
        } else {
            if (j % 2 != 0) process.stdout.write('0 ');
            else process.stdout.write('1 ');
        }
    }
    console.log('');
} */

// ---OR--
/* let start;
for (let i = 1; i <= 5; i++) {
    if (i % 2 != 0) start = 1;
    else start = 0;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(start + ' ');
        start = 1-start;
    }
    console.log('');
} */


// 1             1  
// 1 2         2 1  
// 1 2 3     3 2 1  
// 1 2 3 4 4 3 2 1 

/* 
const n = 9;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + ' ');
    }
    for (k = 1; k <= 2 * n - 2 * i; k++) {
        process.stdout.write('  ');
    }
    for (let l = i; l >= 1; l--) {
        process.stdout.write(l + ' ');
    }
    console.log(' ');
} */


// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

/* const n = 5;
let x = 1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(x + ' ');
        x++;
    }
    console.log('');
}
 */



// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

/* const n = 5;
for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        const asc = String.fromCharCode(64+j)
        process.stdout.write(asc+' ')
    }
    console.log('');
}
 */


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

/* 
function nthFibonaci(n) {
    let f = [0, 1];
    for (i = 2; i <= n; i++) {
        f.push(f[i - 2] + f[i - 1]);
    }
    return f[n];
}


console.log(nthFibonaci(5));
 */

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

console.log(maxSumSubarray([4, 5, 9, 0, 7, 1, 9, 0], 3));
