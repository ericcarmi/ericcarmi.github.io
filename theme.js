export function change_mode() {
  const mode = document.getElementsByTagName("html")[0].getAttribute("data-theme");
  console.log(mode)

  if (mode == "dark") {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
    document.getElementById("mode-button").innerHTML = "light";

  }
  else if (mode == "light") {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    document.getElementById("mode-button").innerHTML = "dark";
  }
}

