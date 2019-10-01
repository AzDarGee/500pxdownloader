$('a').click(function(e) {
    e.preventDefault();  //stop the browser from following

    var imageURL = $("#imageURL").val();
    var pattern= new RegExp('photo\/([0-9]*)');
    var imageID = pattern.exec(imageURL);
    var pxAPI = "https://500px.com/oembed?url=https://500px.com/photo/" + imageID[1] + "&format=json"

    $.getJSON(pxAPI, function( result ) {
    // download(result["url"],result["title"],"image/jpeg");

    var imgDiv = document.getElementById("image");
    $('#image').css("background-image", "url(" + result["url"] + ")");
    // img.src = result["url"];
    // img.alt = result["author"];
    // img.title = result["title"];

    var src = document.getElementById("image");
    //src.appendChild(imgDiv);

    });

    
	
	

});