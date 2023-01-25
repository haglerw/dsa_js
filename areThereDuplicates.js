function areThereDuplicates(...args) {
    
    if (args.length === 0) {
        return false;
    }

    let lookup = {};

    for (let i = 0; i < args.length; i++) {
        let val = args[i];
        lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
    }

    for (let key in lookup) {
        if (lookup[key] > 1) {
            return true;
        }
    }

    return false;
}

// areThereDuplicates(4, 3, 2, 5, 5);
areThereDuplicates('a', 'b', 'c', 'a');