function validation()
{
    var a= document.getElementById("input1").value;
    var b= document.getElementById("input2").value;
    if(a.length<3)
    {
        alert("Your Username must in between 3 to 20 character!!!!");
        return false;
    }
    else if(a.length>20)
    {
        alert("Your Username must in between 3 to 20 character!!!!");
        return false;
    }
    else if(b.length<3)
    {
        alert("Your password must in between 3 to 8 character!!!!");
        return false;
    }
    else if(b.length>8)
    {
        alert("Your password must in between 3 to 8 character!!!!");
        return false;
    }
    else{
        return true;
    }
}