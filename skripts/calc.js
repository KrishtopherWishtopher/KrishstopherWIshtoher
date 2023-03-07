//clears
function clearScreen()
{
    document.getElementById("result").value="";
}
//this'll disply the stuff on the screen
function number(value)
{
    document.getElementById("result").value += value;
}

// basically the calculator portion
function calculate()
{
    let input = document.getElementById("result").value;
    let output = eval(input);
    document.getElementById("result").value= output;
}