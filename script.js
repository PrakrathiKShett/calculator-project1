const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const historyDiv = document.getElementById("history");
const themeToggle = document.getElementById("toggle-theme");

let output = "";
let history = [];

// Function to calculate based on button clicked
const calculate = (btnValue) => {
    if (btnValue === "AC") {
        output = "";
        history = [];
        historyDiv.innerHTML = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } else if (btnValue === "=") {
        try {
            let result = eval(output.replace("%", "/100"));
            history.push(output + " = " + result);
            if (history.length > 5) history.shift(); // Keep last 5 results
            historyDiv.innerHTML = history.join("<br>");
            output = result.toString();
        } catch (error) {
            output = "Error";
        }
    } else if (btnValue === "sqrt") {
        output = Math.sqrt(eval(output)).toString();
    } else if (btnValue === "sin") {
        output = Math.sin(eval(output) * Math.PI / 180).toString();
    } else if (btnValue === "cos") {
        output = Math.cos(eval(output) * Math.PI / 180).toString();
    } else if (btnValue === "tan") {
        output = Math.tan(eval(output) * Math.PI / 180).toString();
    } else if (btnValue === "log") {
        output = Math.log10(eval(output)).toString();
    } else if (btnValue === "pi") {
        output += Math.PI.toString();
    } else if (btnValue === "e") {
        output += Math.E.toString();
    } else {
        output += btnValue;
    }

    display.value = output;
};

// Event listeners for buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        calculate(e.target.dataset.value);
    });
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
});