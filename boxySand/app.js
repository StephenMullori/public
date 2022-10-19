let submit = document.getElementById("submit");

submit.addEventListener("click", collectData);

function collectData(e) {
  e.preventDefault();

  alert(document.getElementById("message").value);
}
