document.getElementById("btn-happiness").addEventListener("click", function () {
document.querySelector(".img").style.display = "inline";
document.getElementById("btn-happiness").disabled = true;
document.getElementById("btn-sadness").disabled = false;
});
document.getElementById("btn-sadness").addEventListener("click", function () {
document.querySelector(".img").style.display = "none";
document.getElementById("btn-sadness").disabled = true;
document.getElementById("btn-happiness").disabled = false;
});








