const bmiForm = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const heightUnit = document.getElementById("heightUnit");
const weightInput = document.getElementById("weight");

const result = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const errorMessage = document.getElementById("errorMessage");

function convertHeightToMeters(height, unit) {
    switch (unit) {
        case "m":
            return height;
        case "ft":
            return height * 0.3048;
        case "in":
            return height * 0.0254;
        case "cm":
        default:
            return height / 100;
    }
}

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

    const heightInMeters = convertHeightToMeters(height, heightUnit.value);

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