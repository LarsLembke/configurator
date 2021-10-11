"use strict";

const features = {
    furby: false,
    spongebob: false,
    sirhiss: false
}

window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");

    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));

    function toggleOption(event) {

        console.log("toggleOption");

        const target = event.currentTarget;
        const feature = target.dataset.feature;

        console.log(target, feature);

        features[feature] = !features[feature]

        let theFeature = createFeatureElement(feature);

        document.querySelector("ul").appendChild(theFeature);

        if (features[feature]) {

            console.log("yes?")

            target.classList.add("chosen");

            document.querySelector(`[data-feature="${feature}"`).classList.remove("hide");

            theFeature.classList.add(feature);

            const firstFrame = target.getBoundingClientRect();

            const lastFrame = theFeature.getBoundingClientRect();

            console.log(firstFrame, lastFrame);

            const deltaX = firstFrame.left - lastFrame.left;
            const deltaY = firstFrame.top - lastFrame.top;
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
                    },
                ], {
                    duration: 600,
                    easing: "ease-in-out",
                }
            );


        } else {

            target.classList.remove("chosen");
            console.log(`Feature ${feature} is turned off!`);


            const firstFrame = target.getBoundingClientRect();

            const lastFrame = theFeature.getBoundingClientRect();

            console.log(firstFrame, lastFrame);

            const deltaX = firstFrame.left - lastFrame.left;
            const deltaY = firstFrame.top - lastFrame.top;
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

//