function calculateTringleArea(){
    // console.log('inside function')
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    // console.log(base)

    const triangleHeigth = document.getElementById('triangle-hidth');
    const triangleValueInput = triangleHeigth.value;
    const heigth = parseFloat(triangleValueInput);
    console.log( heigth) 

    const area =  0.5 * base * heigth;
    console.log('area is the tringle is:', area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}