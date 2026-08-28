
/* 
-----Selection sort => select minimum then swap with max.
 complexity is O(n^2) in all case
*/

function selectionSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ar[i] > ar[j]) {
                let t = ar[i];
                ar[i] = ar[j];
                ar[j] = t;
            }
        }
    }

    console.log(ar)
}

// selectionSort([13, 46, 24, 52, 20, 9]);


/* -------Bubble sort => Push the max element to the last by adjascent swap.
 complexity is O(n^2) => average and worst case.
 O(n) is best case if the array is already sorted.
 we make this O(n) by optimizing this code by checking if is there any atleast one swap happend. This technique works for bubble sort
 because checking and swapping done in adjascent element.

 */
function bubbleSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        let didSwap = false; // optimizing technique
        for (j = 0; j < n - i - 1; j++) {
            if (ar[j] > ar[j + 1]) {
                let t = ar[j];
                ar[j] = ar[j + 1];
                ar[j + 1] = t;
                didSwap = true;
            }
        }
        if (didSwap) break;
    }

    console.log(ar);
}

// bubbleSort([13, 46, 24, 52, 20, 9]);


/* 
Insertion sort => Select one element, place it in correct order;
complexity worst=> O(n^2)
best => O(n) when array is sorted.

*/

function insertionSort(ar) {
    for (let i = 0; i < ar.length; i++) {
        let j = i;
        while (j > 0 && ar[j - 1] > ar[j]) {
            let t = ar[j];
            ar[j] = ar[j - 1];
            ar[j - 1] = t;
            j--
        }
    }

    console.log(ar);
}

// insertionSort([13, 46, 24, 52, 20, 9]);


/* 
complexity n log n in all case.
space o(n)
*/
function mergeSort(ar) {

    if (ar.length == 1) return ar;

    let leftAr = ar.slice(0, Math.ceil((ar.length / 2)));
    let rightAr = ar.slice(Math.ceil((ar.length / 2)));
    let x = mergeSort(leftAr);
    let y = mergeSort(rightAr);

    let i = 0;
    let j = 0;
    let newAr = [];
    while (i < x.length && j < y.length) {
        if (x[i] > y[j]) {
            newAr[newAr.length] = y[j];
            j++;
        } else {
            newAr[newAr.length] = x[i];
            i++
        }
    }

    while (i < x.length) {
        newAr[newAr.length] = x[i];
        i++
    }
    while (j < y.length) {
        newAr[newAr.length] = y[j];
        j++;
    }

    return newAr;
}

// console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));



/* 
quick-sort
*/

function partition(ar, left, right) {
    let pivot = ar[right];
    let j = left;
    for (let i = left; i < right; i++) {
        if (ar[i] < pivot) {
            [ar[i], ar[j]] = [ar[j], ar[i]];
            j++
        }
    }
    [ar[j], ar[right]] = [ar[right], ar[j]];
    return j;
}

function quickSort(ar, left = 0, right = ar.length - 1) {
    if (left < right) {

        let pivotIndex = partition(ar, left, right);
        quickSort(ar, left, pivotIndex - 1);
        quickSort(ar, pivotIndex + 1, right);

    }
    return ar;
}

console.log(quickSort([5, 2, 8, 10, 1, 3, 7, 4]));