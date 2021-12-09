
exports.run = function (input) {

    input=input.split(',').map(x=>~~x);

    const min = Math.min(...input);
    const max = Math.max(...input);

    let min_fuel = Infinity;

    for (let i = min; i <= max; i++) {
        let count = 0;
        input.forEach(val=>{
            count += Math.abs(i-val)*(Math.abs(i-val)+1)/2;
        });

        if(count < min_fuel){
            min_fuel = count;
        }
    }

    return min_fuel;
}
