//------ count the number of digits in a number ---
// it's time complexity is log10O(N) (log to the base 10 of N). N time it's divided by 10.

/* 
function countDigits(num) {
    let count = 0;
    while (num != 0) {
        count++;
        num = Math.trunc(num / 10);
    }

    return count;
}

console.log(countDigits(770)); 
*/



// ----------- Reverse a number --------

/* function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        const lastDigit = num % 10
        rev = (rev * 10) + lastDigit;
        num = Math.trunc(num / 10);
    }

    return rev;
}

reverseNumber(894);
 */


// ----------- Palindrome  --------

/* 
function isNumberPalindrome(num) {
    let rev = 0;
    let orgNum = num;
    while (num > 0) {
        rev = (rev * 10) + num % 10;
        num = Math.trunc(num / 10);
    }

    if (orgNum == rev) return true;
    return false;

}

console.log(isNumberPalindrome(12321));
 */


// ------ Armstrong --------
/* 
function isArmstrong(num) {

    let orgNum = num;
    let result = 0;
    let power = num.toString().length;

    while (num > 0) {
        let lastDigit = num % 10;
        result = result + Math.pow(lastDigit, power);
        num = Math.trunc(num / 10);
    }

    if (orgNum == result) return true;
    return false;

}

console.log(isArmstrong(407));

 */



// ------ Print all divisors -----

/* complexity is O(N) */
/* function printDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) divisors.push(i);
    }

    return divisors.join(',');
}

console.log(printDivisors(49)); */

/* function printDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            divisors.push(i);
            let x = n / i;
            if (x != i) divisors.push(x);
        }
    }

    return divisors.sort((a, b) => a - b).join(',');
}


console.log(printDivisors(6))
 */


// ------------ Prime number ------------

/* function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    let i = 2;
    while (i < num) {
        if (num % 2 == 0) return false;
        i++
    }
    return true;
}

console.log(isPrimeNumber(0));
 */


/* function isPrimeNumber(n) {
    //-- prime number always have 2 factors, 1 and the number itself
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            count++;
            if (n % i != i) count++
        }
    }
    if (count == 2) return true;
    return false;
}

console.log(isPrimeNumber(4));
 */


// ---------------- HCF ----------------

function highestCommonFactor(n1, n2) {
    let hcf = 1;
    let lim = n1 < n2 ? n1 : n2;
    for (let i = 1; i <= lim; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}


console.log(highestCommonFactor(11, 13));

