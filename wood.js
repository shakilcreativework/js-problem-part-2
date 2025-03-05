/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalCft = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalCft;
}

console.log(woodQuantity(30, 2, 6));
