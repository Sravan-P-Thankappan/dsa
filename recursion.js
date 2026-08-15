/* 
Recursion=> When a function calls itself until a specified condition is met.
*/

/* let count = 1;
function printCount(c) {
    if (c == 6) return;
    console.log(c)
    c++;
    printCount(c);
} */

// printCount(count);


// ---------- flatten array using recursion------
function flattenArray(ar) {
    let newAr = [];
    for (let i = 0; i < ar.length; i++) {
        if (Array.isArray(ar[i])) {
            let subAr = flattenArray(ar[i]);
            newAr = newAr.concat(subAr);
        } else {
            newAr.push(ar[i]);
        }
    }
    return newAr;
}

// let array = [1, [7, 8, [4, 5]], 2, 3, [9]];
// let res = flattenArray(array);
// console.log(res);


// ------- Print name N time using recursion-----


/* function printName(c, n) {
    if (c > n) return
    console.log("Sravan");
    c++
    printName(c, n);
}

printName(1, 3) */

/* function print_1_to_N(c, n) {
    if (c > n) return;
    console.log(c);
    c++;
    print_1_to_N(c, n)

}

print_1_to_N(1, 10)
 */

// ------ Print N to 1 ----------
/* 
function print_N_to_1(n){
    if(n<1) return;
    console.log(n);
    n--;
    print_N_to_1(n)
}

print_N_to_1(4);
 */

// ----------- Print 1 to N by backtracking ------

/* function one_to_N(n) {
    if (n < 1) return;
    one_to_N(n-1);
    console.log(n)
}

one_to_N(4) */

/* function N_to_one(c,n){
    if(c>n) return;
    N_to_one(c+1,n);
    console.log(c)
}

N_to_one(1,4) */

//---------- Sum of N numbers ------

/* this is functional type where the funtion return sum by taking the n */
function sumOfNnumbers(n) {

    if (n == 0) return 0;
    let res = sumOfNnumbers(n - 1);
    let sum = n + res;
    return sum;
}
// console.log(sumOfNnumbers(3));

/* below is the parameterised way where parameter is updating and printing the sum */

/* 
function sumOfNnumbersInParameterised(n, sum) {
    if (n == 0) {
        console.log(sum);
        return;
    }
    sumOfNnumbersInParameterised(n - 1, sum + n);
}

sumOfNnumbersInParameterised(3, 0) */


// ------------ factorial using recursion ------

function factorial(n) {
    if (n == 1) return 1;
    let res = n * factorial(n - 1);
    return res;
}

// console.log(factorial(5)) 



//----------- reverse array ----------

function reverseArray(ar) {
    if (ar.length == 1) return ar;
    let firstElem = ar[0];
    let res = reverseArray(ar.slice(1));
    res.push(firstElem);
    return res;
}


//  console.log(reverseArray([1, 2, 3, 8, 4, 7]));


function reverseArray1(i, ar) {
    if (i >= (ar.length) / 2) return;
    let t = ar[i];
    ar[i] = ar[ar.length - i - 1];
    ar[ar.length - i - 1] = t;
    reverseArray1(i + 1, ar);
    return ar;
}

// console.log(reverseArray1(0, [1, 2, 3, 5]));


// --------- checking a string is palindrome or not ---------

function isStringPalindrome(i, str) {
    if (i >= (str.length) / 2) return true;
    if (str[i] != str[str.length - i - 1]) return false;
    return isStringPalindrome(i + 1, str);

}

console.log(isStringPalindrome(0, 'abx'));