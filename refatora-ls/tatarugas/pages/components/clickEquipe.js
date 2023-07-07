export default function clickEquipe() {
    let projeto = document.getElementById("projeto");
    if (projeto.style.display === "block") {
      projeto.style.display = "none";
    } else {
      projeto.style.display = "block";
    }
  }