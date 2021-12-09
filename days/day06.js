
exports.run = function (input) {

    input=input.split(',').map(x=>80-~~x);
    let ctn = true;

    while (ctn){
        const len = input.length;
        console.log(len);
        for (let j = 0; j < len; j++) {
            if(input[j] >= 0){
                input[j]=6;
                input.push(8);
            }else{
                input[j]--;
            }
        }
    }

    return input.length;
}
