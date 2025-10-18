const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(`${contactForm.elements["name"].value}, спасибо за Ваше сообщение! Я свяжусь с Вами в ближайшее время.`);
});
