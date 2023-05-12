$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "gauri.json",
        beforeSend: function() {
            $("#aboutMe").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) 
        {
            $("#aboutMe").html("");
            $.each(data, function()
            {
                $.each(this,function(key, value)
                {
                    $("#aboutMe").append
                    (
                        
                        "<br><br> <h3> " + value.title +"</h3>" +
                        "<br><p> " + value.explain +"</p>"
                        
                    );

                });
                
                
            });
           
            
        }
    });
});