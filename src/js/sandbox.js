function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



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

$(".active-nav-item-onscroll").scroll(function() {
    let scrollDistance = $(".active-nav-item-onscroll").scrollTop();
    let vh = $(window).height();
    let i = Math.round(scrollDistance / vh);
    console.log(i);
    if (scrollAnimEnabled) {
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


$(document).ready(function() {
    sidenavbar();
    var callbacks = $.Callbacks();
});

$(window).resize(function() {
    sidenavbar();
});