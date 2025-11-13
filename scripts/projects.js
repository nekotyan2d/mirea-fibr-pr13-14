const btnSortByAll = document.getElementById("btnSortByAll");
const btnSortByHtml = document.getElementById("btnSortByHtml");
const btnSortByJs = document.getElementById("btnSortByJs");
const btnSortByVue = document.getElementById("btnSortByVue");

const projects = document.querySelectorAll(".project-card");

btnSortByAll.addEventListener("click", () => sort("all"));
btnSortByHtml.addEventListener("click", () => sort("html"));
btnSortByJs.addEventListener("click", () => sort("js"));
btnSortByVue.addEventListener("click", () => sort("vue"));

function sort(tag) {
    const buttons = [btnSortByAll, btnSortByHtml, btnSortByJs, btnSortByVue];
    const tags = ["all", "html", "js", "vue"];

    buttons.forEach((btn, idx) => {
        btn.setAttribute("aria-pressed", tags[idx] == tag);
    });

    let visibleCount = 0;
    projects.forEach((project) => {
        if (tag == "all" || project.dataset.tag == tag) {
            project.style.display = "block";
            project.removeAttribute("aria-hidden");
        } else {
            project.style.display = "none";
            project.setAttribute("aria-hidden", "true");
            visibleCount++;
        }
    });

    const filterStatus = document.getElementById("filter-status");
    filterStatus.textContent = `Показано проектов: ${visibleCount} из ${projects.length}`;
}

projects.forEach((project, i) => {
    project.addEventListener("click", () => {
        showProjectModal(i);
    });

    // для навигации с клавиатуры
    project.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showProjectModal(i);
        }
    });
});

const projectsList = [
    {
        title: "Визитка",
        screenshots: ["../images/portfolio.png"],
        description:
            "Сайт-визитка, созданный для представления моих навыков и проектов. Этот сайт разработан с использованием HTML и CSS.",
        source: "https://github.com/nekotyan2d/mirea-fibr-pr13-14",
        tags: ["html"],
    },
    {
        title: "Фронт DepthHunter",
        screenshots: ["../images/depthhunter1.png", "../images/depthhunter2.png"],
        description:
            "Фронтенд мини-приложения в телеграм DepthHunter. Игра в стиле майнкрафт, но в 2д и в телеграме... Добывай ресурсы, строй и играй с друзьями! Проект написан с использованием Vue и Three.js",
        source: "https://github.com/nekotyan2d/depthhunter",
        tags: ["js", "vue"],
    },
    {
        title: "Priority TODO",
        screenshots: ["../images/todo1.png", "../images/todo2.png", "../images/todo3.png"],
        description:
            "TODO с приоритезацией задач. Приложение позволяет создавать задачи с разными уровнями приоритета и отмечать выполненные. На главной всегда отображается самая приоритетная задача. Проект написан с использованием JavaScript и Vue.js",
        source: "https://github.com/nekotyan2d/priority-todo",
        tags: ["js", "vue"],
    },
];

function showProjectModal(id) {
    const screenshots = projectsList[id].screenshots.map((src) => `<img src="${src}" alt="Скриншот проекта">`).join("");
    const modal = document.createElement("dialog");
    modal.classList.add("project-modal");
    modal.setAttribute("aria-labelledby", "project-modal-title");
    modal.innerHTML = `
        <header class="project-modal__header">
            <h2 class="project-modal__title" id="project-modal-title">${projectsList[id].title}</h2>
            <button class="project-modal__close" aria-label="Закрыть окно">X</button>
        </header>
        <div class="project-modal__tags">
            ${projectsList[id].tags.map((tag) => `<span class="project-modal__tag">${tag}</span>`).join("")}
        </div>
        <div class="project-modal__screenshots">
            ${screenshots}
        </div>
        <div class="project-modal__source">
            <a href="${projectsList[id].source}" target="_blank">Исходный код</a>
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
