
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
