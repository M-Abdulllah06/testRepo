
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