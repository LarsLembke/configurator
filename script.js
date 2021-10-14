"use strict";

const features = {
    furby: false,
    spongebob: false,
    sirhiss: false
}

const spaceFootPath = "M57,564a378.7,378.7,0,0,0-16,37c-4.4,12.1-8.4,25-12,39a414.8,414.8,0,0,0-10,53,405.5,405.5,0,0,0-3,54h0c.7,15.7,1.3,31.3,2,47H28a218.4,218.4,0,0,1-2-28c-.1-16.4,1.3-30.7,4-43a179.5,179.5,0,0,1,48-87c1.7,6.3,3.3,12.7,5,19,5.4,20.7,10.7,41.3,16,62l67,1c5.7-27,11.3-54,17-81a372.1,372.1,0,0,1,33,67,373,373,0,0,1,16,56c1.7,11,3.3,22,5,33h9a631.1,631.1,0,0,0-1-66c-2.4-35.2-7.3-68-14-93a400,400,0,0,0-27-72,18.8,18.8,0,0,0,3-7c.9-4.8.7-9-2-11a7.3,7.3,0,0,0-6-1c-2.3.5-3.5,1.9-5,3s-5,2.2-9,3c-18.7,3.7-31.9,7.5-51,8-25.5.7-46.7-2.9-62-8-4.4-1.5-8.7-3.1-13-5a8.1,8.1,0,0,0-6,4c-.9,1.8-.6,3.7,0,6A59.6,59.6,0,0,0,57,564Z";
const floatFootPath = "M70,595c-2.9,1.2-4.3,4.9-5,9-2.3,12.7.6,29,1,31,1.9,8.4,2.7,15.7,5,24a184.4,184.4,0,0,0,7,21c8.3,20.3,19.8,37.4,34,51s31,20.4,37,20,18.8-8.1,32-21c3.3-3.2,10.3-10.1,11-11,2.4-3.3,4.9-7.4,10-9s10.2.3,13,2,6.8,6.7,9,15,2.2,18.6,0,32c-.9,5.1-2,10.1-6,15a26.8,26.8,0,0,1-15,9,32.2,32.2,0,0,1-11,0c-4.6-.9-16.8-1.8-26-3-5.9-.8-18.5-1-29-1-22.9,0-36.9,2-49,10-4.9,3.2-20.4,14.6-18,25,1.6,6.8,10.4,10.6,23,14,19.8,5.4,42.9,8,52,8a295.4,295.4,0,0,0,44-3c9.9-1.5,21.5-4.3,33-7l26-6a224.6,224.6,0,0,0-1-41c-1.5-12.7-5.9-31.2-11-49-3-10.4-5.8-19.3-8-30-1.7-8.1-3-16.5-4-25s-3-16.3-3-20a14,14,0,0,0-1-5,12.1,12.1,0,0,0-2-3,245.3,245.3,0,0,0,5-27c.6-5-.1-8.9,0-14,.1-3.4.2-9.4-3-11a6.5,6.5,0,0,0-4,0,13.5,13.5,0,0,0-5,3c-1.3,1.1-6.4,3-12,4a374,374,0,0,1-56,6c-22.1.6-38.7.7-51-5-4.3-2-8.1-2.8-12-5S73.2,593.7,70,595Z";
const standardFootPath = "M60,547a12.7,12.7,0,0,0-5,5c-2.2,4-1.3,8.3-1,10s1.4,17.4,5,27c4.7,12.6,9.6,23.9,15,35,6.4,13.2,11.8,24.8,19,34a127.2,127.2,0,0,0,22,22,29.3,29.3,0,0,1,6,15c.4,5.1-.9,11.7-6,20a77.5,77.5,0,0,1-27,26,125.8,125.8,0,0,1-46,15c-4,.4-15,1.6-24,9-7,5.7-10.8,12.2-11,19a22.5,22.5,0,0,0,4,13,25.8,25.8,0,0,0,6,6c4.6,3.3,10.6,7.7,13,9a117,117,0,0,0,42,13,273.8,273.8,0,0,0,36,2c11.1-.1,22.6-.1,34,0a442.1,442.1,0,0,0,46-3c10.8-1.3,21.3-2.9,32-5,16-1.7,28.1-11,32-23,1.6-4.9,3.1-14.3-2-23a27.1,27.1,0,0,0-15-12,181.6,181.6,0,0,1-51-16c-16.7-8.2-30.6-20.7-38-32-5.2-7.9-6.4-14-6-19a26,26,0,0,1,2-8c3.6-8.8,9.7-13.8,14-18a103.2,103.2,0,0,0,11-13c7.9-10.7,11.6-20.1,16-32,7.4-20.1,12-38.7,17-58,.6-2.1.7-5.5,1-8a11.3,11.3,0,0,0-1-7,10.3,10.3,0,0,0-4-4,212.1,212.1,0,0,1-33,9,199.7,199.7,0,0,1-68,1A193.5,193.5,0,0,1,60,547Z";

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


    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));

    function toggleOption(event) {

        console.log("toggleOption");

        const target = event.currentTarget;
        const feature = target.dataset.feature;

        console.log(target, feature);

        features[feature] = !features[feature]

        let theFeature = createFeatureElement(feature);



        if (features[feature] === true) {

            console.log("yes?");

            if (feature.includes("foot")) {
                console.log("fooooot")
                if (feature == "space_foot") {
                    console.log("spacefoot");
                    console.log(document.querySelector("#bottom_path path"))
                    document.querySelector("#bottom_path path").d = spaceFootPath;
                }
            }

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