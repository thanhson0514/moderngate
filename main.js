const mouse1 = document.querySelector('.container_main_home_subcontent1');
const mouse2 = document.querySelector('.container_main_home_subcontent2');
const mouse3 = document.querySelector('.container_main_home_subcontent3');
const mouse4 = document.querySelector('.container_main_home_subcontent4');

const style = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
    animation1: "move1 1s ease-in",
    animation2: "move2 1s ease-in"
}

mouse1.addEventListener('mouseover', (e) => {
    const display13 = document.querySelector('.container_main_home_subcontent1 .container_main_home_description');
    display13.style.display = style['display'];
    display13.style.justifyContent = style['justify-content'];
    display13.style.alignItems = style['align-items'];
    display13.style.flexDirection = style['flex-direction'];
    display13.style.animation = style['animation1'];
});

mouse2.addEventListener('mouseover', (e) => {
    const display13 = document.querySelector('.container_main_home_subcontent2 .container_main_home_description');
    display13.style.display = style['display'];
    display13.style.justifyContent = style['justify-content'];
    display13.style.alignItems = style['align-items'];
    display13.style.flexDirection = style['flex-direction'];
    display13.style.animation = style['animation2'];
});

mouse3.addEventListener('mouseover', (e) => {
    const display13 = document.querySelector('.container_main_home_subcontent3 .container_main_home_description');
    display13.style.display = style['display'];
    display13.style.justifyContent = style['justify-content'];
    display13.style.alignItems = style['align-items'];
    display13.style.flexDirection = style['flex-direction'];
    display13.style.animation = style['animation1'];
});

mouse4.addEventListener('mouseover', (e) => {
    const display13 = document.querySelector('.container_main_home_subcontent4 .container_main_home_description');
    display13.style.display = style['display'];
    display13.style.justifyContent = style['justify-content'];
    display13.style.alignItems = style['align-items'];
    display13.style.flexDirection = style['flex-direction'];
    display13.style.animation = style['animation2'];
});
