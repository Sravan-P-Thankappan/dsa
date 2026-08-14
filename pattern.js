
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
