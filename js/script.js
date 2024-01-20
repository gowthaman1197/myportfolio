// Add custom JavaScript here

// Typing text script

function typingHandler() {
  const text = "I am Gowthaman G";
  const typingElement = document.querySelector("#typing-text");
  const typingDelay = 100;
  typeText(text, typingElement, typingDelay);
}
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", typingHandler);

// getFullYear for footer script

const date = new Date();
const getFullYear = date.getFullYear();
document.getElementById("year").innerText = getFullYear;
