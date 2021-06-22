// main function
function displaySkillsElements() {
    let ListOfSkills = [
        // prog-langs
        "cxx.svg",
        "python3.png",
        "matlab.png",
        "javascript.svg",
        "dart.svg",


        // web-app-dev  
        "html.png",
        "css.png",
        "sass.png",
        "flutter.svg",

        // rob-dev
        "coppeliasim.png",
        "arduino.svg",
        "gazebo.png",
        "ros-small.png",

        // others
        "solidworks.png",
        "fusion360.png",
        "ubuntu.png",
        "pytorch-logo.png",
        "opencv.png",
    ];

    let pathPrefix = "../../imgs/skills/";
    let num_hori_elements = 5;
    let num_vert_elements = 4;
    let i = 0;
    for (; i < num_hori_elements; i++) {
        let element = document.createElement("div")
        element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
        $("#top-hori").append(element);
    }

    for (; i < num_hori_elements + num_vert_elements; i++) {
        let element = document.createElement("div")
        element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
        $("#mid-left").append(element);
    }

    for (; i < num_hori_elements + num_vert_elements * 2; i++) {
        let element = document.createElement("div")
        element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
        $("#mid-right").append(element);
    }

    for (; i < ListOfSkills.length; i++) {
        let element = document.createElement("div")
        element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
        $("#bottom-hori").append(element);
    }
}