const textArray = ["Men", "Women", "Kids", "Yourself"];
let currentText = 0;
const textElement = document.querySelector("#wordChanging");
function changeMyText() {
  textElement.textContent = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}
setInterval(changeMyText, 2000); // Change text every 1 seconds

changeMyText();