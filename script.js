const flightPath ={
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100}, 
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: window.innerWidth, y: 0},
        {x: 100, y: 300}
        // {x: window.innerWidth, y: -100},
        // {x: 0, y: 0},
        // {x: window.innerWidth, y: 100},
        // {x: 0, y: 200},
        // {x: window.innerWidth, y: 300}
    ]
}
const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane",10, {
        bezier: flightPath,
        ease: Power1.easeInOut,
        scale:3
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 3000,
    triggerHook: 0,
})
.setTween(tween)
.setPin(".animation")
.addTo(controller)

const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')

const t1 = new TimelineMax();

t1.fromTo(hero,1,{height:"0%"},{height:"100%", ease: Power2.easeInOut})
.fromTo(hero,1.2,{width:'100%'},{width:"80%"})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%", ease: Power2.easeInOut}, "-=1.2")


// function onTick()
// {
    //     const span = text.querySelectorAll('span')[char];
    //     span.classList.add('fade');
    //     char++;
    //     if(char === splitText.length)
    //     {
        //         complete();
//         return;
//     }
// }
// (()=>{
//     function startAnimation() {
//         const text = document.querySelector(".fancy")
//         const strText = text.textContent
//         const splitText = strText.split("");
//         text.textContent=""
//         for(let i=0;i<splitText.length;i++)
//         {
//             text.innerHTML+= `<span>${splitText[i]}<span>`
//         }
        
//         let char = 0;
//         let timer = setInterval(()=>{
//             let span = text.querySelectorAll('span')[char];
//             span.classList.add('fade');
//             char++;
//             if(char === splitText.length)
//             {
//                 complete();
//                 return;
//             }
//         }, 100);
//         function complete()
//         {
//             clearInterval(timer)
//             timer = null; 
//         }
//     }
//     window.addEventListener('scroll', function(e) {
//         scroll_position = window.scrollY;
//         console.log(scroll_position);
//         if (scroll_position > 4000) {
//             startAnimation();
//         }
//       });
// })();