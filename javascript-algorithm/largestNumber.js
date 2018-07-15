// longest word

word = "Hello world!! chihuahua the game";

wordList = word.split(" ");
console.log(wordList);

let largestNumber = wordList[0];

for (let word of wordList){
    if (word.length > largestNumber.length) {
        largestNumber = word;
    }
}

console.log(largestNumber);