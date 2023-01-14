const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.classList.add("animate__animated", "animate__pulse")
    }, false);

    button.addEventListener("mouseout", () => {
        button.classList.remove("animate__animated", "animate__pulse")
    }, false);
});

