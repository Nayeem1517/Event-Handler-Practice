function cubeNumber(number){
    console.log(number);
    let cube = Math.pow(number, 3);
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error('Input must be an integer');
    }
    return cube;
}
let result = cubeNumber(hgfhhh);
console.log(result)