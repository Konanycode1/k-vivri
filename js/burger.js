document.addEventListener("DOMContentLoaded", ()=>{
    function typeEcran() {
        let cach = document.querySelectorAll(".cach")
        console.log(screen.width)
        if(screen.width <= 800){
            cach.forEach(element => {
                element.style.display = "none"
                
            });
        }
        console.log(screen.width)    
    }
})