const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");


textArea.addEventListener("input", () => {

    if (textArea.value.length >= 250) {
        textArea.style.borderColor = "red";
        textArea.style.color = "red";
        charCount.style.color = "red";
        textArea.value = textArea.value.slice(0, 250);
    }
    else {
        textArea.style.borderColor = "black";
        charCount.style.color = "black";
        textArea.style.color = "black";
    }

    charCount.textContent = `${textArea.value.length}/250`;

});
