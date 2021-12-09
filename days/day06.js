const calculated = [ 6703087164,
  6206821033,
  5617089148,
  5217223242,
  4726100874,
  4368232009,
  3989468462 ];


const calculatePerDay=(days)=>{
    const per_day = [0,0,0,0,0,0,0];

    const count = (day) => {
        let ctn = 1;
        for (let i = 1; i <= Math.floor((day)/7)+1; i++) {
            ctn += count(day-7*i-2);
        }
        return ctn;
    }
    [0,1,2,3,4,5,6].forEach(val=>{
        console.log(val + '   NEW DAY');
        per_day[val] = count(days-val-1);
    });

    console.log(per_day);
    return per_day;
}



exports.run = function (input) {

    input=input.split(',').map(x=>~~x);
    input.unshift(0);
    const days = 256;

    const per_day = calculated;

    return input.reduce((a,b)=>a+per_day[b]);
}
