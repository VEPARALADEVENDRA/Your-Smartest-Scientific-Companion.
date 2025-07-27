document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const output = document.querySelector(".output");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const num1 = parseInt(document.getElementById("num1").value);
            const num2 = parseInt(document.getElementById("num2").value);
            const operator = button.innerText;
            let result;

            if (num1 === "") {
                result = "Forgot to Enter 1 Number";
            }
            else if (num2 === "") {
                result = "Forgot to Enter 2 Number"
            }
            
            else {
                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num1 / num2; break;
                    case '%': result = num1 % num2; break;
                }
            }

            output.innerText = result;
        });
    });
});
