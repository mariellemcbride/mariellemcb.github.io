function showAlert() {
    alert("Hello, world!");
}

function changeSize() {
    var textArea = document.getElementById("inputText");
    textArea.style.fontSize = "24pt";
}

function applyStyle() {
    var textArea = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    var textArea = document.getElementById("inputText");
    var text = textArea.value;

    textArea.value = text.toUpperCase();

    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWordIndex = words.length - 1;
        words[lastWordIndex] += "-Moo";
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}