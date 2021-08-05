let navbarVisibility = false;
$("#m_button-toggle").on("click", function() {
    navbarVisibility = !navbarVisibility;

    let iconElement = $("#m_button-toggle>i");
    if (navbarVisibility) {
        $("#m_navbar-wrapper").css("left", "0vw");
        iconElement.removeClass("fa-bars");
        iconElement.addClass("fa-times");
        iconElement.css("font-size", "2.3rem");
    } else {
        $("#m_navbar-wrapper").css("left", "100vw");
        iconElement.removeClass("fa-times");
        iconElement.addClass("fa-bars");
        iconElement.css("font-size", "2rem");
    }

})

$("#m_navbar-wrapper").on("click", function() {
    let mouseClickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });

    let target = document.getElementById("m_button-toggle");
    setTimeout(function() { target.dispatchEvent(mouseClickEvent); }, 30);
})

$(".m_navbar-element").on("click", function() {
    $(".m_active").removeClass("m_active");
    $(this).addClass("m_active");
})