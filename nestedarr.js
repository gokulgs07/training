let arr = [1,[2,3]];
function getlength(arr)
{
    let a= arr.flat(Infinity);
    console.log(a.length);
}
getlength(arr);