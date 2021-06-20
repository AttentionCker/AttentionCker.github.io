function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

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
            $(".active").removeClass("active");
            $(this).addClass("active");
            activeElementHighlighter.css({
                "top": $(".active").position().top + "px",
                "left": $(".active").position().left + "px",
                "height": $(".active").innerHeight() + "px",
                "width": String(Number($(".active").innerWidth()) * 0.8) + "px",
                "margin-left": String(Number($(".active").innerWidth()) * 0.2) + "px"
            });
        }
    });
}

$(document).ready(function() {
    sidenavbar();
});

$(window).resize(function() {
    sidenavbar();
});