function ellipseCalculation(){
    const calculation =document.getElementById('ellipse-lenth');
    const ellipseInput = calculation.value;
    const a = parseFloat(ellipseInput);
    // console.log(a);

    const bCalculation = document.getElementById('ellipse-weight');
    const bINput = bCalculation.value;
    const b = parseFloat(bINput);
    // console.log(b);

    const area = 22/7 * a * b;
    console.log('ellipse area is', area);

    const output = document.getElementById('ellipse-area');
    output.innerText = area;
}