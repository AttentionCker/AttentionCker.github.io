// main function
function displaySkillsElements() {
    if (document.querySelector(".skill-icon-container>img") == null) {
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

        // let skillsHead = document.getElementById("skills-head");
        // skillsHead.innerHTML = "Skills";

        let i = 0;
        for (; i < num_hori_elements; i++) {
            let element = document.createElement("div");
            element.classList.add("skill-icon-container");
            element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
            $("#top-hori").append(element);
        }

        for (; i < num_hori_elements + num_vert_elements; i++) {
            let element = document.createElement("div");
            element.classList.add("skill-icon-container");
            element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
            $("#mid-left").append(element);
        }

        for (; i < num_hori_elements + num_vert_elements * 2; i++) {
            let element = document.createElement("div");
            element.classList.add("skill-icon-container");
            element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
            $("#mid-right").append(element);
        }

        for (; i < ListOfSkills.length; i++) {
            let element = document.createElement("div");
            element.classList.add("skill-icon-container");
            element.innerHTML = `<img src="${pathPrefix + ListOfSkills[i]}">`;
            $("#bottom-hori").append(element);
        }

        let ListOfIndex = [
            0,
            10,
            1,
            7,
            14,
            8,
            11,
            6,
            17,
            12,
            2,
            15,
            3,
            5,
            9,
            13,
            16,
            4
        ];

        let listOfSkillsImgElement = $(".skill-icon-container>img");
        for (let index = 0; index < ListOfIndex.length; index++) {
            setTimeout(function() { listOfSkillsImgElement[ListOfIndex[index]].classList.add("animate-skill"); }, Math.round(Math.random() * 2500));
        }
    } else {
        console.log("nopes")
    }
}