const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});



const alertBox = document.querySelector(".alert-box");
const closeBtn = document.querySelector(".close-btn");

setTimeout(() => {
  alertBox.classList.add("show");
}, 1000);

closeBtn.addEventListener("click", () => {
  alertBox.classList.remove("show");
});


function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
}


