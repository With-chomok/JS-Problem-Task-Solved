function countVowels(str) {
    let count = 0;
    let vowels = 'A , E , I , O , U';

    for (let char of str.toUpperCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("programming"));
