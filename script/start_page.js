const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", hideStartPage, {
    once: true
})


const loading = document.querySelector(".loading");

let slider = 0;

document.addEventListener("mousewheel", e => {
    if (e.deltaY == 100) {
        hideStartPage();
    }
}, {
    once: true
})


function hideStartPage() {
    document.querySelector(".loading").style.animation = "loadingHide 0.4s";
    document.querySelector(".loading").addEventListener("animationend", (e) => {
        e.target.style.display = "none";
        const script = document.createElement("script");
        script.src = "./script/index.js";
        document.querySelector(".header__logo").style.transform = "translate(0)";
        document.body.append(script);
    });
}

// const rightArrow = document.querySelector(".arrow.right");

// rightArrow.addEventListener("click", (e) => {
//     e.target.style.opacity = 0;
//     const loadingContent = document.querySelector(".loading-content");
//     loadingContent.classList.add("lefted")
//     loading.style.display = "flex";

//     const loadingDescription = document.querySelector(".loading-description");
//     loadingDescription.classList.add("started");
//     runWord(loadingDescription.querySelector(".text"), 15, 100);
// });

// const resizeArrow = document.querySelector(".arrow.resize");

// resizeArrow.addEventListener("click", (e) => {
//     const loadingDescription = document.querySelector(".loading-description");
//     loadingDescription.classList.add("resized");
//     loading.classList.add("resized");

//     const logos =
//         `
//     <div class="logos">
//         <img src="./src/img/Instagram.png">
//         <img src="./src/img/Facebook.png">
//         <img src="./src/img/Twitter.png">
//         <img src="./src/img/WhatsApp.png">
//     </div>
//     `
//     const logosDiv = document.createElement("div");
//     logosDiv.innerHTML = logos;
//     loadingDescription.querySelector(".description").append(logosDiv)
// })