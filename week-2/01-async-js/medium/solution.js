// 2-clock

function clock(){
    setInterval(()=>{
        let date = new Date();
        console.log(date.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', second: 'numeric', hour12: true }))
    },1000)

}
 clock()

function textCleaner(text){

    console.log(text.replace(/ {1,}/g,' ').trim());
}

textCleaner("   hello     world    my    name   is       raman  ")