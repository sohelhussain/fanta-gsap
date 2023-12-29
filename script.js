// document.querySelector(`#main`).addEventListener("mousemove",(event) => {
//     document.querySelector(`#cursor`).style.left = event.x + "px";
//     document.querySelector(`#cursor`).style.top = event.y + "px";
// });

 let tl = gsap.timeline({scrollTrigger:{
    trigger: "#container-second",
    start: "0% 95%",
    end: "60% 60%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta-img",{
    top: "120%",
    left: "3%",
    width: "40%",
},"orange")
tl.to("#half-orange",{
    top: "145%",
    left: "18%",
    width: "30%",
},"orange")
tl.to("#orange",{
    top: "165%",
    right: "10%",
    width: "15%",
},"orange")
tl.to("#duble-leaf",{
    top: "100%",
    left: "0%",
    rotate: "130DEG",
},"orange")
tl.to("#leaf",{
    top: "100%",
    left: "70%",
    rotate: "180DEG",
},"orange")

let tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#container-third",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    markers: true,
}})

tl2.to("#fanta-img",{
    top: "210%",
    left: "30%",
    width: "40%",
})
tl2.to("#half-orange",{
    top: "180%",
    left: "27%",
    width: "45%",
})
tl2.from("#sprite",{
    rotate: "-30DEG",
    right: "70%",
}, "orange")