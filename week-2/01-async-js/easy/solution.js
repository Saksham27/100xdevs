//1-counter

function counter(){
    let counter = 0;
    setInterval(()=>{
        console.log(counter++);
    },1000)
}

// counter();

//2-counter
let globalcounter = 0;
function counterWithSetTimeout(){
console.log(globalcounter++);
    setTimeout(()=>{
            counterWithSetTimeout()
        },1000);

}

counterWithSetTimeout();