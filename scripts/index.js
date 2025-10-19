const btnResume = document.querySelector(".info__resume");
btnResume.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "./assets/resume.pdf";
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
});
