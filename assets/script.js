var count=0;
const next=document.getElementById('next');
const previous=document.getElementById('previous');
const id=document.getElementById('email');
var current=document.getElementById('currentimg');
const campusimgs=["assets/images/campus-1.jpg",
                "assets/images/campus-2.jpg",
                "assets/images/campus-3.jpg"]

next.addEventListener('click',
()=>{
    count=(++count)%campusimgs.length;
current.src=campusimgs[count];
});

previous.addEventListener('click',()=>
{
    if(count==0)
    count=campusimgs.length;
    current.src=campusimgs[--count];
});


var isValid=false;

id.addEventListener('blur',(e)=>
{
    var idcheck=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(id.value=="")
    {
        isValid=false;
    }
    else if (idcheck.test(id.value)==false)
    {
        id.setCustomValidity("Enter a valid email address");
        id.reportValidity();
        isValid=false;
    }
    else
    {
        id.setCustomValidity("");
        isValid=true;
    }
});

function validity()
{
    return isValid;
}