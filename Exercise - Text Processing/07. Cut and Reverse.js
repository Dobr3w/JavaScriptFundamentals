function cutRev(string) {
    let midIndex = string.length / 2;

    let leftHalf = string.slice(0, midIndex).split('').reverse().join('');
    let rightHalf = string.slice(midIndex).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}

cutRev('tluciffiDsIsihTgnizamAoSsIsihT');
cutRev('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');