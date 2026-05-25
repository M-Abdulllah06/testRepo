
// -----------failed api-------------

let url="https://meowfacts.herokuapp.com";
async function retry(url,retries=3,delay=1000){
    try{
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    }catch{
        if(retries>0){
            setTimeout(() => {
            console.log("remaining retries are : ",retries);
            return retry(url,retries-1,delay+1000);
            }, delay); 
        }else{
            console.log("no more retry")
        }
    }
}
retry();

