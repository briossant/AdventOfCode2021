
exports.run = function (input) {

    input=input.split('\n').filter(x=>x!=='').map(x=>x.replace('\r','').split(' -> ').map(y=>y.split(',').map(z=>~~z)));

    const passed = [];
    const counted = [];
    let n=0;
    input.forEach(cp=>{
        let nb = -1;
        if(cp[0][0] === cp[1][0])nb=0;
        if(cp[0][1] === cp[1][1])nb=1;
        if(Math.abs(cp[0][1]-cp[1][1]) === Math.abs(cp[0][0]-cp[1][0]))nb=2;
        console.log(cp,nb)

        if(nb===0 || nb===1){
            const max = cp[0][1-nb] > cp[1][1-nb] ? 1 : 0;
            for (let i = cp[max][1-nb]; i <= cp[1 - max][1-nb]; i++) {
                const to_pass = nb===0 ? cp[0][0] + '-' + i : i +'-' + cp[0][1];
                if(!counted.includes(to_pass)) {
                    if (passed.includes(to_pass)) {
                        counted.push(to_pass);
                        n++;
                    } else {
                        passed.push(to_pass);
                    }
                }
            }
        }else if(nb===2){
            const x = cp[0][0] < cp[1][0] ? 1 : -1;
            const y = cp[0][1] < cp[1][1] ? 1 : -1;

            for (let i = 0; i <= x*(cp[1][0]-cp[0][0]); i++) {
                const to_pass = (cp[0][0]+i*x) + '-' + (cp[0][1]+i*y);
                if(!counted.includes(to_pass)) {
                    if (passed.includes(to_pass)) {
                        counted.push(to_pass);
                        n++;
                    } else {
                        passed.push(to_pass);
                    }
                }
            }
        }
    });

    return n;
}
