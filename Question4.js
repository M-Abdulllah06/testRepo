
// --------------debounce and Throttle-----------



function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(() => {
            fn(...args);
            
        }, delay);
    }
}
let search=(query)=>{
    console.log(`searching for`,query)

}
const searchWithDebounce=debounce(search,2000);
searchWithDebounce("Welcome")




function throttle(fn,delay){
    let timer=0;
    return function(...args){

        let now =Date.now();
        if(now-timer < delay){
            return;
        }
        timer=now;
        return fn(...args);
    }
}
const chat=(message)=>{
    console.log(message)
}
const chatWithThrottle=throttle(chat,5000);
chatWithThrottle("message");
chatWithThrottle("message2");
