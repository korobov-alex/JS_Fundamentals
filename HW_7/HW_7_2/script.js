function changeCSS() {
  const btn = document.querySelector("button");
  const text = document.querySelector("#text");
  btn.addEventListener("click", function (event) {
    text.style.cssText = "color: orange; font-size: 20px; font-family: 'Comic Sans MS'";
  });
}

changeCSS()