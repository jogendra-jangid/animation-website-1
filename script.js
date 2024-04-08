var tl = gsap.timeline()

tl.from("#nav h3",{
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration:0.8,
    stagger: 0.3
})


tl.from("#main h1",{
    x:-500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    scale: 0.5,
    rotate: 5
})

tl.from("img",{
    y:-1000,
    duration:2,
    stagger: 0.8,
    opacity:0,
    rotate:20           
})

tl.from("#footer",{
    y: -200,
    scale:0.3,
    opacity: 0,
    duration :1
})