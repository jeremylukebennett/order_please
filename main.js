

// This function takes a string with a single number in each word (as strings) and returns the string with the words rearranged in the order of the numbers embedded into the words. ie: "is2 Thi1s T4est 3a" becomes -->  "Thi1s is2 3a T4est".

function order(words){

    
    let newWordsArray = [];
    console.log(words);
    
    if(words != "") {
        
        // Divides the words in the string into array elements
        words = words.split(" ");

        for (let i = 0; i < words.length; i++) {
            

            // This regular expression extracts the digits in each string, targeting them with the [0] index number (The code below returns an object, and the first item is the digit).
            let digitFinder = /\d+/;
            // console.log("Extracted number as string: ", words[i].match(digitFinder)[0]);

            // This finds the number in each string in the array and converts it to an actual number (instead of a string)
            let currentRank = parseInt(words[i].match(digitFinder)[0]);

            // console.log('currentRank',currentRank);
            // console.log('words[i]',words[i]);

            newWordsArray[currentRank - 1] = words[i];
        }

        newWordsArray = newWordsArray.join(" ");
        // console.log('newWordsArray',newWordsArray);

        // console.log('newWordsArray',newWordsArray);
        return newWordsArray;
    }
    else {
        return "";
    }

}


  order("is2 Thi1s T4est 3a");
// order(" ");