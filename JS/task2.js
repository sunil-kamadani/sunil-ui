var nameArray = ["aakash","fayaz","suresh","sunil","rajesh"]
var flag = 0;
var name = prompt("please enter name")
for(var i=0;i<nameArray.length;i++)
{
    if(name==nameArray[i])
    {
        console.log("Allow access to "+name)
        flag=1;
    }
}
if(flag==0)
{
    nameArray.push(name);
    nameArray
}
