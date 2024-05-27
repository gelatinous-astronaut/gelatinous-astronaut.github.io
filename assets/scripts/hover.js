document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".randomColorButton");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = getRandomColor();
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = ""; // Reset to default on mouse out
        });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
