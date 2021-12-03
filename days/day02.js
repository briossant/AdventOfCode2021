
exports.run = function (input) {
    let aim = 0;
    let pos = 0;
    let depth = 0;

    input.split('\n').forEach(l => {
        l = l.split(' ');
        switch (l[0]){
            case 'forward':
                pos += ~~l[1];
                depth += ~~l[1] * aim
                break;
            case 'down':
                aim += ~~l[1];
                break;
            case 'up':
                aim -= ~~l[1];
                break;
        }
    });


    return depth * pos;
}
