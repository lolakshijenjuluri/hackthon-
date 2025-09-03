document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const message = document.getElementById("message");

  btn.addEventListener("click", () => {
    message.textContent = "Hello! 🎉 You clicked the button.";
    message.style.color = "#4a90e2";
    message.style.fontWeight = "bold";
  });
});