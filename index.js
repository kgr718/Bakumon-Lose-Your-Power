const hammer = document.querySelector(".hammer");
const portals = [...document.querySelectorAll(".portal")];
const scoreIs1 = document.querySelector(".score span");
let score = 0// starting point for the code

function run(){
    const i = Math.floor(Math.random() * portals.length);
    const portal = portals[i];
    let timer = null
    const img = document.createElement("img");
    img.classList.add("bakumon");
    img.src = "images/bakumonW.jpeg";
    // this is where the magic happens, created the image tag here and also programmed it to jump from portal to portal

    img.addEventListener("click", () => {
            score += 1;
            scoreIs1.textContent = score;
            img.src = 'images/bakumon.jpg'
            clearTimeout(timer);
            setTimeout(() => {
                portal.removeChild(img)
                run()
            }, 500)
    }) //this code adds a click event listener that incriments the score plus 1 and also changes the image upon click

    portal.appendChild(img) //appending is what allows it to render

    timer = setTimeout(() => {
        portal.removeChild(img)
        run()
    }, 1500)
    
}
run()




window.addEventListener("mousemove", e => {
    hammer.style.top = e.pageY + "px"
    hammer.style.left = e.pageX + "px"
}) // this is what allows zudomon to latch on to the the cursor, i didnt take off the cursor because the cursor click is what the bakumon reacts to, not necessarily the hammer

window.addEventListener("mousedown", () =>{
    hammer.classList.add("active") //when i click down bakumon gets hit with the ZUUUUDOOOOHAMMERRR
}) 
window.addEventListener("mouseup", ()=>{
    hammer.classList.remove("active") //when i release, the digimon goes back up
})

// https://www.youtube.com/watch?v=YPLK2SPCl90