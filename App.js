const num1 = parseInt(prompt("Enter no1: "));

const num2 = parseInt(prompt("Enter no2: "));

const operator = prompt("Enter operator (+, -, /, *, **);");

if (operator == "+") {
  Score = num1 + num2;
  console.log(num1);
  console.log(num2);
  prompt(num1 + " + " + num2 + " = " + Score);
} else if (operator == "-") {
  Score = num1 - num2;
  prompt(num1 + " - " + num2 + " = " + Score);
} else if (operator == "/") {
  Score = num1 / num2;
  prompt(num1 + " / " + num2 + " = " + Score);
} else if (operator == "*") {
  Score = num1 * num2;
  prompt(num1 + " * " + num2 + " = " + Score);
} else if (operator == "**") {
  Score = num1 ** num2;
  prompt(num1 + " ** " + num2 + " = " + Score);
} else {
  alert("Something went wrong");
}
