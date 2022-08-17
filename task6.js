function upper(title)
{
    let words = title.split(" ");
    for(let i=0;i<words.length;i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let title1=words.join(" ");
    return(title1);
}
console.log(upper("the road not taken"));