import { skillsItemsList } from './m_skillsCardsListItems.js';

function m_createSkillsCardhtml(e) {
    const imgPathPrefix = "../../imgs/skills/";
    let innerhtmlstrvalue = `
    <div class="m_skill-item-card">
    <img src="${imgPathPrefix + e.imgname}">
    <p class="m_skill-item-name">
        | ${e.name}
    </p>
    </div>`;
    return innerhtmlstrvalue;
}

export function m_displaySkillsCards() {

    console.log("displaySkillsCards")
    let skillsCardsContainer = $("#m_skills-cards-wrapper");

    skillsItemsList.forEach(function(e) {
        let innerHtmlStrValue = m_createSkillsCardhtml(e);
        skillsCardsContainer.append(innerHtmlStrValue);
    });
}