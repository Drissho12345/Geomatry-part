function parallelogramCalculation(){
    const parallelogramBase =document.getElementById('parallelogram-Base');
    const parallelogramInput =parallelogramBase.value;
    const base = parseFloat(parallelogramInput)
    // console.log(lenth);

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightInput = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightInput);
    // console.log(hight);

    const area = base * height;
    console.log('the parallelogram area is',area);
    
    const output = document.getElementById('parallelogram-area');
    output.innerText = area;

}