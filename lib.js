
function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function med(numbers){
    midIndex = Math.floor(numbers.length / 2);
    sorting = numbers.sort((a,b) => a-b);
    return numbers.length % 2 == 0 ? (sorting[midIndex]+sorting[midIndex - 1])/2 : sorting[midIndex];
}

function iqr(numbers){
    midIndex = Math.floor(numbers.length / 2);
    sorting = numbers.sort((a,b) => a-b);
    if (numbers.length % 2 == 0)
    {
        Q1 = sorting.slice(0, midIndex);
        Q3 = sorting.slice(midIndex);
    } else {
        Q1 = sorting.slice(0, midIndex);
        Q3 = sorting.slice(midIndex+1);
    }
    return med(Q3) - med(Q1) ;
}

function outlier(numbers){
    original = numbers.slice();
    midIndex = Math.floor(numbers.length / 2);
    sorting = numbers.sort((a,b) => a-b);
    if (numbers.length % 2 == 0)
    {
        Q1 = sorting.slice(0, midIndex);
        Q3 = sorting.slice(midIndex);
    } else {
        Q1 = sorting.slice(0, midIndex);
        Q3 = sorting.slice(midIndex+1);
    }

    for (let i = 0; i < original.length; i++){  
        if(original[i] < (med(Q1) - (1.5 * iqr(numbers)))){
            console.log(original[i]);
        } else if(original[i] > (med(Q3) + (1.5 * iqr(numbers)))){
            console.log(original[i]);
        }
    }

    return;
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
};