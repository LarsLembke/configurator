"use strict";

const features = {
    spongebob: false,
    float_foot: false,
    space_foot: false,
    standard_foot: true
}

const spaceFootPath = '<path class="cls-2" d="M57,564a378.7,378.7,0,0,0-16,37c-4.4,12.1-8.4,25-12,39a414.8,414.8,0,0,0-10,53,405.5,405.5,0,0,0-3,54h0c.7,15.7,1.3,31.3,2,47H28a218.4,218.4,0,0,1-2-28c-.1-16.4,1.3-30.7,4-43a179.5,179.5,0,0,1,48-87c1.7,6.3,3.3,12.7,5,19,5.4,20.7,10.7,41.3,16,62l67,1c5.7-27,11.3-54,17-81a372.1,372.1,0,0,1,33,67,373,373,0,0,1,16,56c1.7,11,3.3,22,5,33h9a631.1,631.1,0,0,0-1-66c-2.4-35.2-7.3-68-14-93a400,400,0,0,0-27-72,18.8,18.8,0,0,0,3-7c.9-4.8.7-9-2-11a7.3,7.3,0,0,0-6-1c-2.3.5-3.5,1.9-5,3s-5,2.2-9,3c-18.7,3.7-31.9,7.5-51,8-25.5.7-46.7-2.9-62-8-4.4-1.5-8.7-3.1-13-5a8.1,8.1,0,0,0-6,4c-.9,1.8-.6,3.7,0,6A59.6,59.6,0,0,0,57,564Z"/>';

const floatFootPath = '<path class="cls-2" d="M53,544a7.5,7.5,0,0,0-3,2,8.3,8.3,0,0,0-2,5c-.7,6.5-1.4,22.9,0,29,1.9,8.8,3.4,21.6,7,33a179.5,179.5,0,0,0,19,41c8,12.8,19.6,27.4,37,39,9.3,6.2,16.5,8.8,24,8s18.4-9.5,31-24c3.8-4.3,7.4-6.5,11-11,2-2.5,4.5-5.9,9-7,6.6-1.6,13.5,3,17,7,5.3,6,5.5,13.3,5,26-.7,17-2.1,26.4-9,33a28.4,28.4,0,0,1-10,6,34.3,34.3,0,0,1-16,1c-3-.5-21-2.6-32-4-7.3-.9-23.8.1-38,1-12.7.8-24.8,2.1-36,11-4.4,3.5-16.8,14.8-14,25,2,7.3,14.6,12.2,38,16,18.7,3,38.5,4.5,50,4a320,320,0,0,0,47-6c14.8-2.9,29.4-6.6,44-11a215.9,215.9,0,0,0-1-35,217.7,217.7,0,0,0-6-32c-7.9-30.4-17.5-65.8-19-83-.5-6-2.4-12-2-15,.1-.8.5-3.5-1-5a4.2,4.2,0,0,0-2-1,171.2,171.2,0,0,1,3-21c1.8-8.6,1.5-19.6,2-24a9.9,9.9,0,0,0-1-6,8.6,8.6,0,0,0-3-3,211.9,211.9,0,0,1-149,1Z"/>';

const standardFootPath = '<path class="cls-2" d="M60,547a12.7,12.7,0,0,0-5,5c-2.2,4-1.3,8.3-1,10s1.4,17.4,5,27c4.7,12.6,9.6,23.9,15,35,6.4,13.2,11.8,24.8,19,34a127.2,127.2,0,0,0,22,22,29.3,29.3,0,0,1,6,15c.4,5.1-.9,11.7-6,20a77.5,77.5,0,0,1-27,26,125.8,125.8,0,0,1-46,15c-4,.4-15,1.6-24,9-7,5.7-10.8,12.2-11,19a22.5,22.5,0,0,0,4,13,25.8,25.8,0,0,0,6,6c4.6,3.3,10.6,7.7,13,9a117,117,0,0,0,42,13,273.8,273.8,0,0,0,36,2c11.1-.1,22.6-.1,34,0a442.1,442.1,0,0,0,46-3c10.8-1.3,21.3-2.9,32-5,16-1.7,28.1-11,32-23,1.6-4.9,3.1-14.3-2-23a27.1,27.1,0,0,0-15-12,181.6,181.6,0,0,1-51-16c-16.7-8.2-30.6-20.7-38-32-5.2-7.9-6.4-14-6-19a26,26,0,0,1,2-8c3.6-8.8,9.7-13.8,14-18a103.2,103.2,0,0,0,11-13c7.9-10.7,11.6-20.1,16-32,7.4-20.1,12-38.7,17-58,.6-2.1.7-5.5,1-8a11.3,11.3,0,0,0-1-7,10.3,10.3,0,0,0-4-4,212.1,212.1,0,0,1-33,9,199.7,199.7,0,0,1-68,1A193.5,193.5,0,0,1,60,547Z"/>';

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
                if (feature === "space_foot") {

                    features.float_foot = false;
                    features.standard_foot = false;

                    document.querySelector(`#options [data-feature="float_foot"`).classList.remove("chosen");
                    document.querySelector("#float_foot").classList.add("hide");
                    document.querySelector(`#options [data-feature="standard_foot"`).classList.remove("chosen");
                    document.querySelector("#standard_foot").classList.add("hide");

                    document.querySelector("#bottom_path").innerHTML = spaceFootPath;

                } else if (feature === "float_foot") {


                    features.standard_foot = false;
                    features.space_foot = false;

                    document.querySelector(`#options [data-feature="standard_foot"`).classList.remove("chosen");
                    document.querySelector("#space_foot").classList.add("hide");
                    document.querySelector(`#selected [data-feature="space_foot"`).remove();
                    document.querySelector(`#options [data-feature="space_foot"`).classList.remove("chosen");
                    document.querySelector("#standard_foot").classList.add("hide");


                    document.querySelector("#bottom_path").innerHTML = floatFootPath;

                } else {

                    features.space_foot = false;
                    features.float_foot = false;

                    document.querySelector("#space_foot").classList.add("hide");
                    document.querySelector(`#options [data-feature="space_foot"`).classList.remove("chosen");
                    document.querySelector(`#selected [data-feature="space_foot"`).remove();
                    document.querySelector("#float_foot").classList.add("hide");
                    document.querySelector(`#options [data-feature="float_foot"`).classList.remove("chosen");

                    document.querySelector("#bottom_path").innerHTML = standardFootPath;

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


            if (feature.includes("foot")) {
                console.log("fooooot")
                if (feature === "space_foot") {

                    features.space_foot = false;
                    document.querySelector("#standard_foot").classList.remove("hide");

                    document.querySelector("#bottom_path").innerHTML = standardFootPath;

                } else if (feature === "float_foot") {

                    features.float_foot = false;
                    document.querySelector("#standard_foot").classList.remove("hide");

                    document.querySelector("#bottom_path").innerHTML = standardFootPath;

                } else {

                    features.space_foot = false;

                    document.querySelector("#space_foot").classList.add("hide")
                    features.float_foot = false;

                    document.querySelector("#float_foot").classList.add("hide")


                    document.querySelector("#bottom_path").innerHTML = "";

                }
            }

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
        img.src = `images/${feature}_option.png`;
        img.alt = capitalize(feature);

        li.append(img);

        return li;
    }

    function capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }


});