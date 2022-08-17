let vegetables = ['carrot','tomato','cucumber','cabbage','potato']
let colour = ['orange','red','green','green','yellow']
let choose = 'cabbage';
function vcolour(choose){


for(i=0;i<vegetables.length;i++) 
{
if (choose==vegetables[i])
{
    return(colour[i]);
}

}
}
console.log(vcolour(choose));