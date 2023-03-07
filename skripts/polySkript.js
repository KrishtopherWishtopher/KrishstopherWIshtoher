
function validateEntry() 
{
    let input = document.getElementById("num").value;
    input = Number(input);
    if (input < 0) 
    {
       input= (input * -1);
    }
    input = Math.round(input);
    return input;


}

function getShape() 
{
    const numOfSides = validateEntry();

    let wordEnding = "gon"
    var start;

    switch(numOfSides) 
    {
        case 1:
            {
                start = "mono";
                break;
            }
        case 2:
            {
                start = "di";
                break;
            }
        case 3:
            {
                start = "tri";
                break;

            }
        case 4:
            {
                start = "tetra";
                break;

            }
        case 5:
            {
                start = "penta";
                break;

            }
        case 6:
            {
                start = "hexa";
                break;

            }
        case 7:
            {
                start = "hepta";
                break;

            }
        case 8:
            {
                start = "octa";
                break;

            }
        case 9:
            {
                start = "ennea";
                break;

            }
        case 10:
            {
                start = "deca";
                
                break;

            }   
        default:
            {
                start ="YOU MUST ENTER A NUMBER BETWEEN 1 AND 10";
                wordEnding = "";
            }

    }
    let completeWord = start + wordEnding;
    document.getElementById("shapeName").innerHTML=completeWord;
    
}