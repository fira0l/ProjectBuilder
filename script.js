const Open = document.getElementById("open");
const Close = document.getElementById("close");
const Container = document.querySelector(".container");

Open.addEventListener("click", () => Container.classList.add("show-nav"));
Close.addEventListener("click", () => Container.classList.remove("show-nav"));
