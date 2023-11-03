const btn = document.querySelector(".btn")
const bmi_result = document.querySelector("#bmi-result")
const weight_condition = document.querySelector("#weight-condition")

const calculateBMI = () => {
    const height = document.querySelector("#height").value / 100
    const weight = document.querySelector("#weight").value

    const bmivalue = weight / (height * height)

    bmi_result.value = bmivalue.toFixed(2)

    if (bmivalue < 18.5) {
        weight_condition.innerHTML = "Under Weight"
    } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        weight_condition.innerHTML = "Normal Weight"
    } else if (bmivalue >= 25 && bmivalue <= 29.9) {
        weight_condition.innerHTML = "Over Weight"
    } else if (bmivalue <= 30) {
        weight_condition.innerHTML = "Obesity"
    }

}

btn.addEventListener("click", calculateBMI)