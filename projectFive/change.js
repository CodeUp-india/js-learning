const rect = document.querySelector('.center')
rect.addEventListener('mousemove', (e)=>{
    let rectLocation = rect.getBoundingClientRect()
    let insideRect = e.clientX - rectLocation.left
    if (insideRect< rectLocation.width/2) {
        let redcolor = gsap.utils.mapRange(0, rectLocation.width/2, 0, 255, insideRect)
        gsap.to(rect, {
            backgroundColor: `rgb(255, ${redcolor}, ${redcolor})`,
            ease: Power4
        })
        
    } else {
        let bluecolor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRect)
        gsap.to(rect, {
            backgroundColor: `rgb(${bluecolor}, ${bluecolor}, 255)`,
            ease: Power4
        })   
    }
    rect.addEventListener('mouseleave', ()=>{
        gsap.to(rect, 
            {backgroundColor: "white"}
        )
    })
})