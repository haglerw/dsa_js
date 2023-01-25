function sameFrequency(int1, int2) {
    let int1Array = int1.toString();
    let int2Array = int2.toString();
    
    if (int1Array.length !== int2Array.length) {
        return false;
    }

    let lookup = {};

    // create an object containing counter frequency of the digits
    for (let i = 0; i < int1Array.length; i++) {
        let digit = int1Array[i];
        lookup[digit] ? lookup[digit] +=1 : lookup[digit] = 1;
    }

    for (let i = 0; i < int2Array.length; i++) {
        let digit = int2Array[i];
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }
    }
    return true;
}

sameFrequency(435018289578, 58792813845);