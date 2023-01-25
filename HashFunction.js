function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }

    return total;
}

// this method works with lowercase characters
function improvedHash(key, arrayLen) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % arrayLen;
    }
    return total;
}


// improvedHash("NRLcGclhasoFAYqqGjgsBYWWJOdfErFvlEpnEumbfuAKLVSBYZlRaRwktdHojTflqhhzUrtCapmROOnFeGAYXGIDWdCRohksLoUKAwMPsJbfewdpPZtvUOEqTbwvOTtrMAKwNCRGLTXMuAsshwIcFoibZNEEwMmAiLjhZlJerYzyHNDcUwyNSzSykTuYhcQtDnpAiEgwayocSvYHlAIfhxZCxjVZvyirCxoCffmVOfnPDfPTjwdTGdrMQcloFxzEUqFmMqcjonusXEpnmzYTUMPUtgeEMwQcisdTaeRdeBgOAJXthuYvygwLZEbTgLlUCUhDrOXRiCEqqGvoOPvQYcgKtLuKZZfBdKRfPceBEUAObRqrlrNwXUvIborFLknsSsZgMCPlRPUkgaRTcFCPZWjGhuTDAuiRhwhpEtzOSlOohsvbdinCmMJzoXihVhplsYBiNAgbCAEEGSdfAzRIlQVQxlYWKHVQmUdMnQSWipKrVIgZKepS", 21);
// improvedHash("nWvKFhYnBSgrUeVZTvTUhdPVTKiHAkmXscfwGUVoqHuvCUCuVRWkJmmIVWegZaQPrYInuXwdhEwkvFmnbbtpeWLApvCyuMdyXchF", 13);
// improvedHash("cyan", 13);
// improvedHash("ABSENT", 13);