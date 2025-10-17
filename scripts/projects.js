const btnSortByAll = document.getElementById("btnSortByAll");
const btnSortByHtml = document.getElementById("btnSortByHtml");
const btnSortByJs = document.getElementById("btnSortByJs");
const btnSortByReact = document.getElementById("btnSortByReact");

const projects = document.querySelectorAll(".project-card");

btnSortByAll.addEventListener("click", () => sort("all"));
btnSortByHtml.addEventListener("click", () => sort("html"));
btnSortByJs.addEventListener("click", () => sort("js"));
btnSortByReact.addEventListener("click", () => sort("react"));

function sort(tag) {
    projects.forEach((project) => {
        if (tag == "all" || project.dataset.tag == tag) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

projects.forEach((project, i) => {
    project.addEventListener("click", () => {
        showProjectModal(i);
    });
});

const projectsList = [
    {
        title: "Проект 1",
        description: "Описание проекта 1",
        screenshots: ["../images/avatar.jpg", "../images/avatar.jpg"],
        description: "Подробное описание проекта 1...",
        tags: ["html"],
    },
    {
        title: "Проект 2",
        description: "Описание проекта 2",
        screenshots: ["../images/avatar.jpg", "../images/avatar.jpg"],
        description: "Подробное описание проекта 2...",
        tags: ["js"],
    },
    {
        title: "Проект 3",
        description: "Описание проекта 3",
        screenshots: ["../images/avatar.jpg", "../images/avatar.jpg"],
        description: "Подробное описание проекта 3...",
        tags: ["react"],
    },
];

function showProjectModal(id) {
    const screenshots = projectsList[id].screenshots.map((src) => `<img src="${src}" alt="Скриншот проекта">`).join("");
    const modal = document.createElement("dialog");
    modal.classList.add("project-modal");
    modal.innerHTML = `
        <header class="project-modal__header">
            <h2 class="project-modal__title">${projectsList[id].title}</h2>
            <button class="project-modal__close">X</button>
        </header>
        <div class="project-modal__tags">
            ${projectsList[id].tags.map((tag) => `<span class="project-modal__tag">${tag}</span>`).join("")}
        </div>
        <div class="project-modal__screenshots">
            ${screenshots}
        </div>
        <p class="project-modal__description">${projectsList[id].description}</p>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
    modal.showModal();

    modal.addEventListener("close", () => {
        document.body.removeChild(modal);
        document.body.style.overflow = "";
    });

    const closeBtn = modal.querySelector(".project-modal__close");
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}
