const bmiForm = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const result = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const errorMessage = document.getElementById("errorMessage");

bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate input
    if (
        isNaN(height) ||
        isNaN(weight) ||
        height <= 0 ||
        weight <= 0
    ) {
        errorMessage.textContent =
            "Please enter valid positive height and weight values.";

        result.classList.add("hidden");
        return;
    }

    errorMessage.textContent = "";

    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    const roundedBMI = bmi.toFixed(1);

    // Determine category
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 25) {
        bmiCategory = "Normal";
    } else if (bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    // Display result
    bmiValue.textContent = roundedBMI;
    category.textContent = bmiCategory;

    result.classList.remove("hidden");
});