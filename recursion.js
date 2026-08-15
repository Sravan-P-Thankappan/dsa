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