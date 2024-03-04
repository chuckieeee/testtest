function changeColor() {
    var randomBackgroundColor = getRandomColor();
    document.querySelector(".container").style.backgroundColor = randomBackgroundColor;

    var randomTextColor = getRandomColor();
    var textElements = document.querySelectorAll(".container");
    textElements.forEach(function (element) {
        element.style.color = randomTextColor;
    });
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
