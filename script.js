function openEnvelope() {
  if (document.querySelector(".enve-up").classList.contains("enve-up-open")) {
    document.querySelector(".enve-up").classList.remove("enve-up-open");
    document.querySelector(".display").classList.remove("display-none");
    document.querySelector(".enve-up").classList.remove("zindexback");
  } else {
    document.querySelector(".enve-up").classList.add("enve-up-open");
    document.querySelector(".envelope").classList.remove("shake");
    document.querySelector(".display").classList.add("display-none");
    document.querySelector(".enve-up").classList.add("zindexback");
  }
}