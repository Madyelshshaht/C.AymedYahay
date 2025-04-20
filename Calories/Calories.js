function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const resultDiv = document.getElementById("result");

    if (!weight || !height || !age) {
        resultDiv.innerHTML = "من فضلك أدخل جميع القيم بشكل صحيح.";
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = Math.round(bmr * activity);
    resultDiv.innerHTML = `سعراتك اليومية: ${calories} سعرة حرارية`;
}
