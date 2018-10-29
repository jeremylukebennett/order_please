

function order(words){

// Divides the words in the string into array elements
words = words.split(" ");
// console.log(words);

let newWordsArray = [];


for (let i = 0; i < words.length; i++) {

    let digitFinder = /\d+/;

    console.log(words[i].match(digitFinder));

    // This finds the number in each string in the array and converts it to an actual number (instead of a string)
    let currentRank = parseInt(words[i].match(digitFinder)[0]);

    console.log('currentRank',currentRank);
    console.log('words[currentRank - 1]',words[currentRank - 1]);

    newWordsArray[i] = words[currentRank - 1];
}

newWordsArray = newWordsArray.join(" ");
console.log('newWordsArray',newWordsArray);


return newWordsArray;



}


//   order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");