
exports.run = function (input) {
    input = input.split('\n');
    let count = 0;

    for (let i = 3; i < input.length; i++) {
        if( ~~input[i-3] < ~~input[i] )count++;
    }

    return count;
}
