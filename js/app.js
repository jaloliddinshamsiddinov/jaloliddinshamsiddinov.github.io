const navAnim = () => {
    const burger = document.querySelector('.mbfk');
    const nav = document.querySelector('.logo');
    const lisen = document.querySelector('.mbfk li');


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}
navAnim ();