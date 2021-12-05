
exports.run = function (input) {
    input = input.split('\n');

    const numbers = input[0].replace('\r','').split(',');
    const grids = [[]];
    let winning_grid;
    let winning_num = -1;

    let i2 = 0;
    for (let i = 2; i < input.length; i++) {
        if(input[i] === '' || input[i] === '\r'){
            i2++;
            grids.push([]);
            continue;
        }
        grids[i2].push(input[i].replace('\r','').split(' ').filter(x=>x!==''));
    }


    function checkCollums(ls, i){
        let sm = 0;
        ls.forEach(s=>{
            sm+=s[i];
        })
        return sm === -5
    }


    numbers.forEach(num=> {
        const to_rm = [];
        for (let x = 0; x < grids.length; x++) {
            for (let y = 0; y < grids[x].length; y++) {
                const index = grids[x][y].indexOf(num);
                if(index > -1){
                    grids[x][y][index] = -1;
                }
                if(grids[x][y].reduce((a,b)=>a+b) === -5 || checkCollums(grids[x],index)){
                    winning_grid = grids[x];
                    winning_num = num;
                    to_rm.push(x);
                    break;
                }
            }
        }
        to_rm.reverse();

        to_rm.forEach(x=>{
            grids.splice(x,1);
        });
    });

    let sum = 0;

    for (let x = 0; x < winning_grid.length; x++) {
        for (let y = 0; y < winning_grid[x].length; y++) {
            if(winning_grid[x][y] !== -1) {
                sum += ~~winning_grid[x][y];
            }
        }
    }
    console.log(winning_grid, sum, winning_num)

    return sum * winning_num;
}
