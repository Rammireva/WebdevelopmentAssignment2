function calcCircleArea(r){
    return 3.14 * r * r;
}

sol1 = calcCircleArea(7);
sol2 = calcCircleArea(1.5);
sol3 = calcCircleArea(20);

document.getElementById('sol1').innerHTML = sol1;
document.getElementById('sol2').innerHTML = sol2;
document.getElementById('sol3').innerHTML = sol3;