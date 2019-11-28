function openmenu()
{
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
}
function closemenu()
{
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
}

function additem()
{
    document.getElementById("add-btn").style.display="none";
    document.getElementById("added-btn").style.display="block";
}

function remove()
{
    document.getElementById("add-btn").style.display="block";
    document.getElementById("added-btn").style.display="none";
}

function additem2()
{
    document.getElementById("add-btn2").style.display="none";
    document.getElementById("added-btn2").style.display="block";
}

function remove2()
{
    document.getElementById("add-btn2").style.display="block";
    document.getElementById("added-btn2").style.display="none";
}

function additem3()
{
    document.getElementById("add-btn3").style.display="none";
    document.getElementById("added-btn3").style.display="block";
}

function remove3()
{
    document.getElementById("add-btn3").style.display="block";
    document.getElementById("added-btn3").style.display="none";
}
function additem4()
{
    document.getElementById("add-btn4").style.display="none";
    document.getElementById("added-btn4").style.display="block";
}

function remove4()
{
    document.getElementById("add-btn4").style.display="block";
    document.getElementById("added-btn4").style.display="none";
}function additem5()
{
    document.getElementById("add-btn5").style.display="none";
    document.getElementById("added-btn5").style.display="block";
}

function remove5()
{
    document.getElementById("add-btn5").style.display="block";
    document.getElementById("added-btn5").style.display="none";
}
function additem6()
{
    document.getElementById("add-btn6").style.display="none";
    document.getElementById("added-btn6").style.display="block";
}

function remove6()
{
    document.getElementById("add-btn6").style.display="block";
    document.getElementById("added-btn6").style.display="none";
}

function myFuction()
{
    var input, filter, t, name, i;
    input = document.getElementById("input");
    filter = input.value().toUpperCase();
    t = document.getElementById("profile");
    name = t.tr.td.getElementByTagName("name");

    for(i = 0;i<name; i++)
    {
        var a = name[i].getElementByTagName("a")[0];
        if(a.InnerHTML.toUpperCase().indexOf(filter) > -1)
        {
            name[i].style.display ="";
        }
        else
        {
            name[i].style.display ="none";
        }
    }
}

