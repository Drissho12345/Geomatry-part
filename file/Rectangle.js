function rectangleCalculation(){
    const rectangle = document.getElementById('rectangle-lenth');
    const rectangleInpute = rectangle.value;
    const lenth = parseFloat(rectangleInpute)
    // console.log(lenth)


    const rectangleWeight = document.getElementById('rectangle-weight');
    const weightInput = rectangleWeight.value;
    const weight = parseFloat(weightInput);
    // console.log(weight);

    const area = lenth * weight;
    console.log('the rectangle area is:', area);


    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}