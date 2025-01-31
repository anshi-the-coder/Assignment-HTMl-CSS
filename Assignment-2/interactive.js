document.getElementById("greetButton").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value.trim();
  let greetingElement = document.getElementById("greeting");
  console.log(name);
  if (name === "") {
    greetingElement.textContent = "Please enter your name.";
    greetingElement.classList.add("error");
    greetingElement.style.opacity = 1;
  } else {
    greetingElement.textContent = `Hello, ${name}! Welcome!`;
    greetingElement.classList.remove("error");
    greetingElement.style.opacity = 0;
    greetingElement.style.opacity = 0;
    setTimeout(() => {
      greetingElement.style.opacity = 1;
    }, 50);
  }
});
