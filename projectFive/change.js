const rect = document.querySelector('.center')
rect.addEventListener('mousemove', (e)=>{
    let rectLocation = rect.getBoundingClientRect()
    
    let insideRect = e.clientX - rectLocation.left
    if (insideRect<rectLocation.width/2){
        console.log('left');
    
    }else{
        console.log('right');
    }
    
    
})