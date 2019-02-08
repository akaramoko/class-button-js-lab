let popbutton = document.querySelector("#popbutton");

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!");
     if(popbutton.classList.contains("pop")){
        popbutton.classList.remove("pop");
    }else{
        popbutton.classList.add("pop");
    }

});

let bigbutton = document.querySelector("#bigbutton");

bigbutton.addEventListener("click", e => {
    console.log("big button clicked!");
    if(bigbutton.classList.contains("big")){
        bigbutton.classList.remove("big");
    }else{
        bigbutton.classList.add("big");
    }

});

let fancybutton = document.querySelector("#fancybutton");

fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!");
     if(fancybutton.classList.contains("fancy")){
        fancybutton.classList.remove("fancy");
    }else{
        fancybutton.classList.add("fancy");
    }

});

let negativebutton = document.querySelector("#negativebutton");

negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!");
    if(negativebutton.classList.contains("negative")){
        negativebutton.classList.remove("negative");
    }else{
        negativebutton.classList.add("negative");
    }

});


let target = document.querySelector("#target");

target.addEventListener("click", e => {
    console.log("target clicked!");
});

let smallbutton = document.querySelector("#smallbutton");

smallbutton.addEventListener("click", e => {
    console.log("button clicked!");
    if(smallbutton.classList.contains("small")){
        smallbutton.classList.remove("small");
    }else{
        smallbutton.classList.add("small");
    }

});