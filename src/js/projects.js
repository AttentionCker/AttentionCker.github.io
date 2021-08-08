import { projectsItemsList } from './projectsCardListItems.js';


function createProjectCardhtml(e) {
    const imgPathPrefix = "../../imgs/projects/";
    let innerhtmlstrvalue = `
    <div class="project-card">
        <img class="card_image" src="${imgPathPrefix + e.imgname}">
        <div class="card_text">
            <div class="tags">${e.tags}</div>
            <div class="project-title">${e.name}</div>
            <div class="project-desc">${e.desc}</div>
        </div>
        <div class="card_footer">
            <div class="hidden"></div>
            <a href="//${e.link}" target="_blank" class="project-link">
                <div>Project Link</div>
            </a>
        </div>
    </div>`;
    return innerhtmlstrvalue;
}

export function displayProjectCards() {

    let projectCardsContainer = $("#projects>.cards-container");
    let m_projectCardsContainer = $("#m_projects>.cards-container");

    projectsItemsList.forEach(function(e) {
        let innerHtmlStrValue = createProjectCardhtml(e);
        projectCardsContainer.append(innerHtmlStrValue);
        m_projectCardsContainer.append(innerHtmlStrValue);
    });

    projectCardsContainer.append(`<div id="after-last-card" class="project-card"></div>`);
    m_projectCardsContainer.append(`<div id="after-last-card" class="project-card"></div>`);

}