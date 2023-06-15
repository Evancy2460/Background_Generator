window.onload = function() {
  var colorInput = document.getElementById("color-input");
  var colorButton = document.getElementById("color-button");

  colorButton.addEventListener("click", function() {
    var color = colorInput.value;
    document.body.style.backgroundColor = color;
  });
};
