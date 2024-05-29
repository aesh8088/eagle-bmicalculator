let weight = document.getElementById('weight');
let height = document.getElementById('height');
let button = document.getElementById('check');
let output = document.getElementById('output');

// BMI Formula = BMI = weight / (height*height)

button.addEventListener('click', () => {
    let weightValue = weight.value;
    let heightValue = height.value;

    if(!weightValue || !heightValue){
        alert('Please enter weight or height');
        return;
    } else {
       let out = (weightValue / ((heightValue*heightValue) / 10000 )).toFixed(2);
      
       output.innerHTML = `Your BMI is ${out}`;
    }
})