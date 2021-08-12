import { displayProjectCards } from "./projects.js";

let scrollAnimEnabled = true;

function sidenavbar() {
    let sidenavElement = $(".sidenav-element");
    let activeElement = $(".active");
    let activeElementHighlighter = $("#active-elem-highlighter");
    activeElementHighlighter.css({
        "top": $(".active").position().top + "px",
        "left": $(".active").position().left + "px",
        "height": $(".active").innerHeight() + "px",
        "width": String(Number($(".active").innerWidth()) * 0.8) + "px",
        "margin-left": String(Number($(".active").innerWidth()) * 0.2) + "px"
    });
    sidenavElement.on({
        click: function() {
            scrollAnimEnabled = false;
            $(".active").removeClass("active");
            $(this).addClass("active");
            activeElementHighlighter.css({
                "top": $(".active").position().top + "px",
                "left": $(".active").position().left + "px",
                "height": $(".active").innerHeight() + "px",
                "width": String(Number($(".active").innerWidth()) * 0.8) + "px",
                "margin-left": String(Number($(".active").innerWidth()) * 0.2) + "px"
            });
            setTimeout(() => { scrollAnimEnabled = true; }, 550);
        }
    });
}


function isSectionInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return rect.top >= -100;
}


$(".active-nav-item-onscroll").scroll(function() {
    if (scrollAnimEnabled) {
        let scrollDistance = $(".active-nav-item-onscroll").scrollTop();
        let vh = $(window).height();
        let i = Math.round(scrollDistance / vh);
        $(".sidenav-element.active").removeClass("active");
        $(".sidenav-element").eq(i).addClass("active");
        let activeElement = $(".sidenav-element.active");
        let activeElementHighlighter = $("#active-elem-highlighter");
        activeElementHighlighter.css({
            "top": $(".active").position().top + "px",
            "left": $(".active").position().left + "px",
            "height": $(".active").innerHeight() + "px",
            "width": String(Number($(".active").innerWidth()) * 0.8) + "px",
            "margin-left": String(Number($(".active").innerWidth()) * 0.2) + "px"
        });
    }
});

$(".m_onscroll").scroll(function() {
    console.log("--------------------");
    let listOfSections = [$("#m_home"), $("#m_about"), $("#m_skills"), $("#m_projects"), $("#m_contact")];
    for (let i = 0; i < listOfSections.length; i++) {
        if (isSectionInViewport(listOfSections[i])) {
            let id = `#${listOfSections[i][0].id}`;
            $(".m_active").removeClass("m_active");
            $("#m_navbar>a").each(function() {
                if ($(this).attr("href") == id) {
                    $(this).addClass("m_active");
                }
            });
            break;
        }
    }
});


let temp_view_func = function() {
    let e = document.querySelector(".active");
    // console.log(e.getAttribute("href"));
    document.querySelector(e.getAttribute("href")).scrollIntoView();
};

$(document).ready(function() {
    console.log("ready");
    sidenavbar();
    displayProjectCards();
    // temp_view_func();
});

setInterval(function() {
    if ($(".active").attr("href") == "#skills") {
        displaySkillsElements();
    }
}, 1000);



$(window).resize(function() {
    sidenavbar();
});