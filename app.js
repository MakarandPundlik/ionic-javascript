const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');

//to calculate BMI ,
//BMI = weight/height*height

const calculateBMI = () =>{
    const h = Number(height.value);
    const w = Number(weight.value);

    const BMI = w/(h*h);

   // console.log(BMI);
   if(isNaN(BMI))
   {
    alert("Please enter numbers only");
    return;
   }

   const resultElement = document.createElement('ion-card');
   result.innerHTML="";
   resultElement.innerHTML=`
    <ion-card-content>
        <h2>${BMI}</h2>
    </ion-card-content>
   `
   result.appendChild(resultElement);
}

//reset fields
const resetFields=()=>{
    height.value="";
    weight.value="";
    result.innerHTML=""
}

resetBtn.addEventListener('click',resetFields);

calculateBtn.addEventListener('click',calculateBMI)