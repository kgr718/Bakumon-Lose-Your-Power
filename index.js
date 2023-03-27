const hammer = document.querySelector(".hammer");
const portals = [...document.querySelectorAll(".portal")];
const scoreIs1 = document.querySelector(".score span");
let score = 0

function run(){
    const i = Math.floor(Math.random() * portals.length);
    const portal = portals[i];
    let timer = null
    const img = document.createElement("img");
    img.classList.add("bakumon");
    img.src = "images/bakumonW.jpeg";
    

    img.addEventListener("click", () => {
            score += 1;
            scoreIs1.textContent = score;
            img.src = 'images/bakumon.jpg'
            clearTimeout(timer);
            setTimeout(() => {
                portal.removeChild(img)
                run()
            }, 500)
    })

    portal.appendChild(img)

    timer = setTimeout(() => {
        portal.removeChild(img)
        run()
    }, 1500)
    
}
run()




window.addEventListener("mousemove", e => {
    hammer.style.top = e.pageY + "px"
    hammer.style.left = e.pageX + "px"
})

window.addEventListener("mousedown", () =>{
    hammer.classList.add("active")
}) 
window.addEventListener("mouseup", ()=>{
    hammer.classList.remove("active")
})