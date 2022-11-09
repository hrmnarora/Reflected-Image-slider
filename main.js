// Variables
let btn1el = document.getElementById("btn1")
let btn2el = document.getElementById("btn2")
let slidecontel = document.getElementById("slidecont")
let crntimg=4
let timeout;

// changing style of middle img
document.getElementById(`img${crntimg+1}`).style.filter = "grayscale(0%)";
document.getElementById(`img${crntimg+1}`).style.height="340px";
document.getElementById(`img${crntimg+1}`).style.width="255px";

// Adding events to Buttons 
btn1el.addEventListener("click",() =>{
    clearTimeout(timeout)
    crntimg++
    scroll()
    console.log(crntimg)
})

btn2el.addEventListener("click",() =>{
    
    clearTimeout(timeout)
    crntimg--
    scroll()
    console.log(crntimg)
})

// reset properties of all images
function reset() {
	var elements = document.getElementsByClassName('img');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.filter= "grayscale(100%)" ;
        elements[i].style.height="300px";
        elements[i].style.width="215px";      
	}
}

// making imgcont scrolable
scroll()
function scroll(){
    if (crntimg>8){
        crntimg=0;       
    }
    if (crntimg<0){
        crntimg=8;       
    }
    reset()
    document.getElementById(`img${crntimg+1}`).style.filter = "grayscale(0%)";
    document.getElementById(`img${crntimg+1}`).style.height="340px";
    document.getElementById(`img${crntimg+1}`).style.width="255px";
    slidecontel.style.transform=`translateX(${(crntimg-4) * 255}px)`
    
    // Auto scroll
    timeout = setTimeout(() => {
        crntimg--
        scroll()
     }, 3000);
}

