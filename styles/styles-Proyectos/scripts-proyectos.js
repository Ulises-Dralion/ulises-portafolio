let checkbox = document.querySelector(".sw_dark_mode_input");
let theme = localStorage.getItem("theme");

if (theme === "dark") {
    checkbox.checked = true
  console.log("papuuu ando darks");
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");

} else if (theme === "light") {
    checkbox.checked = false
  console.log("papuuu ando light");
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
}


checkbox.addEventListener("change", function (event) {
  console.log(this.checked);
  if (this.checked) {
    localStorage.setItem('theme','dark')

    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    localStorage.setItem('theme','light')

    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});
