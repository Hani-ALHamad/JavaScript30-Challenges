const div = document.querySelectorAll("div");

// bubble up: the browser will go from the smallest element up to 
// the biggest one -> three two one
div.forEach(div => div.addEventListener("click", function(e){
    console.log(this.classList.value)

// to stop bubbling up; for example if you click on element three it will console log three only
    // e.stopPropagation();
},
// capture down: the browser will go down from biggest to 
// smallest element (when it's set to true) -> one two three
    {capture:false,

// once: when it's set to true, the event will 
// listen to the click (for each element) only once.
    once:true
    }
    
))
