// -------------Promise.all()----------

function promise(promises){
    return new Promise((resolve,reject)=>{
        let result=[];
        let completed=0;
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then((value)=>{
                result[index]=value;
                completed++;
                if(completed==promises.length){
                    resolve(result);
                }
            }).catch((error)=>{
                reject(error)

            })
        });
    })
}
let p1=Promise.resolve(10);
let p2=Promise.resolve(20);
let p3=Promise.resolve(30);
promise([p1,p2,p3])
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

// -----------failed api-------------

let url="https://meowfacts.herokuapp.com";
async function retry(url,retries=3){
    try{
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    }catch{
        if(retries>0){
            console.log("remaining retries are : ",retries);
            return retry(url,retries-1);
        }else{
            console.log("no more retry")
        }
    }
}
retry();


// --------custom deep clone------


let obj={name:"ali",address:{city:"lahore",province:"punjab"}};
function deepClone(obj){
    let copy={};
    for (let key in obj ){
        if(typeof obj[key]=="object" && obj[key]!==null){
            copy[key]=deepClone(obj[key]);
        }else{
            copy[key]=obj[key];
        }
    }
    return copy
}
let clone=deepClone(obj);
clone.address.city="multan"
console.log(clone)
console.log(obj)

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


// --------------------group employees--------


let employees = [

    {name:"Ali", department:"IT"},
    {name:"Ahmed", department:"HR"},
    {name:"Usman", department:"IT"},
    {name:"Sara", department:"HR"},
    {name:"Ayesha", department:"Finance"}

];
let grouped=employees.reduce((group,current)=>{
    if(!group[current.department]){
        group[current.department]=[]

    }
        group[current.department].push(current);
    return group;
},{});
console.log(grouped)