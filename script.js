"use strict";

const features = {
    furby: false,
    spongebob: false,
    sirhiss: false
}
let colorValue;


// const top_path = document.querySelector("#top_path");
// const water_path = document.querySelector("#water_path");
// const top_bubble_path = document.querySelector("#top_bubble_path");
// const bottom_bubble_path = document.querySelector("#bottom_bubble_path");
// const bottom_path = document.querySelector("#bottom_path");



let currentElem = document.querySelector("#top_path");

window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");

    document.querySelectorAll("g").forEach((elem) => {
        elem.addEventListener("click", (event) => {

            console.log("color")

            let lavaTarget = event.target;

            console.log(lavaTarget)

            colorValue = document.querySelector("#color_value").value;

            console.log(colorValue)

            lavaTarget.style.fill = colorValue;

        })
    });


    function setColor(theColor) {

        document.querySelector("#color_picker").addEventListener("input", function() {
            theColor = document.querySelector("#color_value").value;

            console.log(document.querySelector("#color_value").value)

            return theColor;
        });


    }




    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));

    function toggleOption(event) {

        console.log("toggleOption");

        const target = event.currentTarget;
        const feature = target.dataset.feature;

        console.log(target, feature);

        features[feature] = !features[feature]

        let theFeature = createFeatureElement(feature);



        if (features[feature] === true) {

            console.log("yes?")

            target.classList.add("chosen");

            document.querySelector("ul").appendChild(theFeature);

            document.querySelector(`[data-feature="${feature}"`).classList.remove("hide");

            theFeature.classList.add(feature);

            const firstFrame = theFeature.getBoundingClientRect();

            const lastFrame = target.getBoundingClientRect();

            console.log("firstframe", firstFrame);
            console.log("lastframe", lastFrame);

            const deltaX = lastFrame.x - firstFrame.x;
            const deltaY = lastFrame.y - firstFrame.y;
            const deltaW = firstFrame.width / lastFrame.width;
            const deltaH = firstFrame.height / lastFrame.height;

            theFeature.animate(
                [{
                        transformOrigin: "top left",
                        transform: `translateX(${deltaX}px)
                translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`,
                    },
                    {
                        transformOrigin: "top left",
                        transform: "none"
                    }
                ], {
                    duration: 2000,
                    easing: "ease-in-out",
                }
            );


        } else {

            target.classList.remove("chosen");
            console.log(`Feature ${feature} is turned off!`);
            document.querySelector(`[data-feature="${feature}"`).classList.add("hide");

            theFeature.classList.remove(feature);

            const theChild = document.querySelector(`.${feature}`);

            document.querySelector(`ul [data-feature="${feature}"]`).remove(theFeature);


            const firstFrame = theChild.getBoundingClientRect();

            const lastFrame = target.getBoundingClientRect();


            console.log("firstframe", firstFrame);
            console.log("lastframe", lastFrame);

            const deltaX = firstFrame.left - lastFrame.left;
            const deltaY = firstFrame.top - lastFrame.top;
            const deltaW = firstFrame.width / lastFrame.width;
            const deltaH = firstFrame.height / lastFrame.height;

            theChild.animate(
                [{
                        transformOrigin: "top left",
                        transform: `translateX(${deltaX}px)
                translateY(${deltaY}px)`,
                    },
                    {
                        transformOrigin: "top left",
                        transform: "none"
                    },
                ], {
                    duration: 600,
                    easing: "ease-in-out",
                }
            );
        }
    }

    function createFeatureElement(feature) {
        const li = document.createElement("li");
        li.dataset.feature = feature;

        const img = document.createElement("img");
        img.src = `images/${feature}.png`;
        img.alt = capitalize(feature);

        li.append(img);

        return li;
    }

    function capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }


});