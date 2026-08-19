/* 
To find frequency of number we can use hashing meathod.
Approach prestoring and fetching.
prestore values , then fetch.

By normal way;
[1,2,3,1,4,2,1]
for 1 -> 3 times
2 -> 2 times
3 -> 1 times
4 -> 1 times
10 -> 0 time
...........
...........
...........
m -> n times

for each time we have to travers n  times through array. for m times complexity is O(mn)

*/

// ------ create an hash array with a max number. In the above array 4 is the max number


function numberHashing() {
    let hash = Array.from(new Array(13)).fill(0); // here we are taking max number as 12;(0 to 12) and assigning 0 in each index
    // max number size is 10^7
    // so for number, array hashing is not preferable.

    let input = [1, 3, 7, 2, 1, 3, 5, 0]

    for (let i = 0; i < input.length; i++) {
        hash[input[i]] += 1; // updating the count
    }

    let m = 6;
    while (m >= 0) {
        console.log(`${m} occurs ${hash[m]} times`);
        m--
    }
}


/* function characterHashing() {
    let hash = Array.from(new Array(256)).fill(0); // 256 is no of characters extended ASCI, A-65 like this
    // max character  size is 256
    //  for character, array hashing  always preferrable .
    let input = 'abcdeaca'

    for (let i = 0; i < input.length; i++) {
        let characterCode = input[i].charCodeAt(0);
        hash[characterCode] += 1;
    }

    console.log('a occurs', hash['a'.charCodeAt(0)]);

} */


function characterHashing() {
    // only considering a to z
    let hash = Array.from(new Array(26)).fill(0);

    let input = 'abcdeaca'
    for (let i = 0; i < input.length; i++) {
        hash[(input[i].charCodeAt(0)) - ('a'.charCodeAt(0))] += 1;; // for a, 97-97 =0, for b 98-97 = 1;
    }

    let i = 0;
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    while (i < alphabets.length) {
        console.log(`${alphabets[i]} occurs ${hash[(alphabets[i].charCodeAt(0)) - ('a'.charCodeAt(0))]} times `);
        i++;
    }
}

// characterHashing();


function frequency(ar) {

    let map = new Map();

    for (let i = 0; i < ar.length; i++) {
        map.set(ar[i], (map.get(ar[i]) || 0) + 1);
    }

    let i = 10
    while (i--) {
        console.log(`Frequency of ${i}  is ${map.get(i) || 0}`)
    }

}

// frequency([2, 4, 6, 1, 2, 7, 8]);

/* 
Time complexity
for ordered map => log(n) for fetching and storing in all case.

for unordered map => o(1) best case, o(n) worst for storing and fetching.

In js, there is no ordered or unordered. In js map preseve the insertion order

Collision
-----------

When two key two different keys produce same index/hash is said to be collision.


To handle collision, we can use chaining method. ie; Store multiple entries at the same position

*/

function highesteFrequencyNumber(ar) {
    let map = new Map();
    for (let i = 0; i < ar.length; i++) {
        map.set(ar[i], (map.get(ar[i]) || 0) + 1);
    }

    let hfn = 0;
    for ([key, value] of map) {
        if (value > hfn) hfn = key;
    }
    return `${hfn} is the highest frequent number`;
}

console.log(highesteFrequencyNumber([1, 2, 3, 2, 7, 2, 9, 3, 3, 3, 3, 3]));