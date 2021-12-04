
exports.run = function (input) {
    input = input.split('\n');

    const numbers = input[0].split(',');
    const grids = [[]];
    let winning_grid;
    let winning_num = -1;

    let i2 = 0;
    for (let i = 2; i < input.length; i++) {
        if(input[i] === ''){
            i2++;
            grids.push([]);
            continue;
        }
        grids[i2].push(input[i].split(' ').filter(x=>x!==''));
    }

    numbers.forEach(num=> {
        const to_rm = [];
        for (let x = 0; x < grids.length; x++) {
            for (let y = 0; y < grids[x].length; y++) {
                const index = grids[x][y].indexOf(num);
                if(index > -1){
                    grids[x][y].splice(index,1);
                }
                if(grids[x][y].length === 0){
                    winning_grid = grids[x];
                    winning_num = num;
                    to_rm.push(x);
                    break;
                }
            }
        }
        to_rm.forEach(x=>{
            grids.splice(x,1);
        });
    });

    let sum = 0;

    for (let x = 0; x < winning_grid.length; x++) {
        for (let y = 0; y < winning_grid[x].length; y++) {
            sum += ~~winning_grid[x][y];
        }
    }

    console.log(winning_grid)
    return sum * winning_num;
}
