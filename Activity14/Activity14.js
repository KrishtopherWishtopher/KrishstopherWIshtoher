$(document).ready(function() 
{
    $("a").click(function() 
    {
        let theTitle = $(this).attr("title");
        let url = ("json_files/"+theTitle+".json");     
            $.getJSON(url, function(json) 
            {
                json.speakers.forEach(element => 
                {
                    $('#h1').html(element.title);
                    $('#img').attr('src',element.image);
                    $('h2').html(element.month+"<br>"+element.speaker);
                    $('#p').html(element.text);
                }); 
            });
    });
});