const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((faq) => faq.addEventListener("click", updateToggle));

function updateToggle() {
  let itemToggle = this.getAttribute("aria-expanded");
  let child = this.firstElementChild; 

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
    child.src = "./assets/images/icon-minus.svg";
  } else {
    this.setAttribute("aria-expanded", "false");
    child.src = "./assets/images/icon-plus.svg";
  }
}
