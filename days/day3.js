
exports.run = function (input) {

    function count(list, i){
        let count_1 = 0;
        for (let i2 = 0; i2 < list.length; i2++) {
            if (list[i2][i] === '1')count_1++;
        }
        return count_1 >= list.length / 2;
    }

    let O2_list = input.split('\n');
    let CO2_list = input.split('\n');

    const len = O2_list[0].length;

    for (let i = 0; i < len; i++) {
        let nO2_list = [];
        let search = count(O2_list, i) ? '0' : '1';
        for (let i2 = 0; i2 < O2_list.length; i2++) {
            if (O2_list[i2][i] === search)nO2_list.push(O2_list[i2]);
        }
        O2_list = nO2_list;
        if(O2_list.length===1){
            break;
        }
    }
    for (let i = 0; i < len; i++) {
        let nO2_list = [];
        let search = count(CO2_list, i) ? '1' : '0';
        for (let i2 = 0; i2 < CO2_list.length; i2++) {
            if (CO2_list[i2][i] === search)nO2_list.push(CO2_list[i2]);
        }
        CO2_list = nO2_list;
        if(CO2_list.length===1){
            break;
        }
    }


    return parseInt(O2_list[0], 2) *  parseInt(CO2_list[0], 2);
}
