function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
    console.log('\n');
}

logAtMost5(1);
logAtMost5(2);
logAtMost5(3);
logAtMost5(4);
logAtMost5(5);
logAtMost5(10);
logAtMost5(100);
logAtMost5(1000);
logAtMost5(10000);
logAtMost5(100000);
logAtMost5(1000000);