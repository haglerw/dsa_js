function averagePair(sortedArray, expectedAverage) {
    if (sortedArray.length === 0) {
        return false;
    }
    
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex < endIndex) {
        let average = (sortedArray[startIndex] + sortedArray[endIndex]) / 2;
        if (average === expectedAverage) {
            return true;
        } else if (average > expectedAverage) {
            endIndex--;
        } else {
            startIndex++;
        }
    }

    return false;

}

// averagePair([1,2,3],2.5);
// averagePair([],4);
// averagePair([-1,0,3,4,5,6], 4.1);
averagePair([1,3,3,5,6,7,10,12,19],8);