function pies(arr, pie1, pie2) {
    let firstPie = arr.indexOf(pie1);
    let secondPie = arr.indexOf(pie2);

    let pies = arr.slice(firstPie, secondPie + 1);
    return pies;
}

console.log(pies(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log(pies(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));