const thmBtn = document.querySelectorAll(".darkmode");

thmBtn.forEach((i) =>
  i.addEventListener("click", () => {
    if (localStorage.getItem("dark") === "false") {
      localStorage.setItem("dark", "true");
      window.location.reload();
    } else {
      localStorage.setItem("dark", "false");
      window.location.reload();
    }
    console.log(localStorage.getItem("dark"));
  })
);

window.onload = function () {
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("darkThm");
  } else {
    document.body.classList.remove("darkThm");
  }
};
