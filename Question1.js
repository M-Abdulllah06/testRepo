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
