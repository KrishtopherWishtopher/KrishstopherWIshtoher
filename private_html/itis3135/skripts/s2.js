
function greeting() 
{
    let name = document.getElementById("name").value;
    let feeling= document.getElementById("feeling").value;
    var greeting= "The Kind Sloth welcomes you, " + name+ "! " + "We see that you're feeling "+feeling+ " .";
    document.getElementById("companyGreet").innerHTML = greeting;
}

function add()
{
    const num1 = document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    const total= Number(num1) + Number(num2);

    document.getElementById("totalAdd").innerHTML=total;    
}

function subtract()
{
    const num1 = document.getElementById("num3").value;
    const num2=document.getElementById("num4").value;
    const total= Number(num1) - Number(num2);
    document.getElementById("totalSubtract").innerHTML=total; 
}
function multiply()
{
    const num1 = document.getElementById("num5").value;
    const num2=document.getElementById("num6").value;
    const total= Number(num1) * Number(num2);
    document.getElementById("totalProduct").innerHTML=total; 
}

function kindWords()
{
    var kindness;
    var random= Math.floor(Math.random() * 11);
    if(random <= 2)
    {
        kindness = "You're a good person";
    }
    else if(random > 2 &&random <= 5)
    {
        kindness = "You look beautiful!";
    }
    else if(random > 5 &&random <= 7)
    {
        kindness = "You have a wonderful personality!";
    }
    else
    {
        kindness = "Based?";
    }
    document.getElementById("kind").innerHTML=kindness;

}

function musicLink() 
{
    var a = document.createElement('a'); 
    
    
    var random= Math.floor(Math.random() * 11);
    if(random <= 2)
    {
        var link = document.createTextNode("KING LAMAGRA 222");
        a.title = "KING LAMAGRA 222";
        a.href = "https://www.youtube.com/watch?v=3xCq8y7c4Mk"; 
    }
    else if(random > 2 &&random <= 5)
    {
        var link = document.createTextNode("RCB");
        a.title = "RCB";
        a.href = "https://www.youtube.com/watch?v=TIEM6bTPSoU"; 
    }
    else if(random > 5 &&random <= 7)
    {
        var link = document.createTextNode("EvilStarAnthem");
        a.title = "EvilStarAnthem";
        a.href = "https://www.youtube.com/watch?v=aoUJYA6uDno";
    }
    else
    {
        var link = document.createTextNode("Dimples");
        a.title = "Dimples";
        a.href = "https://www.youtube.com/watch?v=pvS24Z6AbIg";
    }

    a.appendChild(link);
    document.getElementById("newMusic").appendChild(a);    
}



