let navigator = document.querySelector(".header__navigation");

let ultraBigDone = false;
let shakeBottleDone = false;

document.body.addEventListener("scroll", (e) => {
    console.log(e)
    if (document.body.scrollTop >= 200) {
        navigator.style.width = "60%";
        navigator.style.backgroundColor = "rgba(99, 68, 42, .95)";
        navigator.style.borderRadius = "40px";
    } else {
        navigator.style = "";
    }

    const cup1 = document.querySelector(".first-cup");
    if (elementInViewport(cup1)) {
        cup1.style.animation = "imgAnim 1.5s";
    }
    const cup2 = document.querySelector(".second-cup");
    if (elementInViewport(cup2)) {
        cup2.style.animation = "imgAnimRight 1.5s";
    }

    const ultrabig = document.querySelector(".header .block-title.ultra-big");
    if (elementInViewport(ultrabig)) {
        if (!ultraBigDone) {
            ultraBigDone = true;
            ultrabig.style.transform = "rotate(5deg)";
            runWord(ultrabig, 100, 300);
        }
    }
    const main = document.querySelector(".main");
    if (elementInViewport(main)) {
        main.style.opacity = 1;
    }
    const coffes = document.querySelector(".coffees img");
    if (elementInViewport(coffes)) {
        coffes.style.opacity = "1";
    }
})

function elementInViewport(el) {
    var bounds = el.getBoundingClientRect();
    return (
        (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
        (window.innerHeight - bounds.top > 0) && // Выше нижней
        (bounds.left + bounds.width > 0) && // Правее левой
        (window.innerWidth - bounds.left > 0) // Левее правой
    );
}