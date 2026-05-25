
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

