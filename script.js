var n=0
var ab
var sv
var mv
var dj

function buttonclick(val)
{
    document.getElementById("scr").value+=val
    
    }


function cl()
{
    document.getElementById("scr").value=""
}


function add()
{
    ab=document.getElementById("scr").value
    document.getElementById("scr").value=""
    n=1
    

}

function sub()
{
    sv=document.getElementById("scr").value
    document.getElementById("scr").value=""
    n=2

}

function mult()
{
    mv=document.getElementById("scr").value
    document.getElementById("scr").value=""
    n=3

}

function div()
{
    dj=document.getElementById("scr").value
    document.getElementById("scr").value=""
    n=4
}

function eqdisplay()
{
    var res

    if(n==1){
        var ac=document.getElementById("scr").value
        res=+ab + +ac;
        document.getElementById("scr").value=res;
    }

    else if(n==2){
        res=sv-document.getElementById("scr").value
        document.getElementById("scr").value=res
    }
    else if(n==3){
        res=mv*document.getElementById("scr").value
        document.getElementById("scr").value=res
    }
    else if(n==4){
        res=dj/document.getElementById("scr").value
        document.getElementById("scr").value=res
    }
}
