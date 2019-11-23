$('a').click(function(e) {
    e.preventDefault();  //stop the browser from following

    var imageURL = $("#imageURL").val();
    var pattern= new RegExp('photo\/([0-9]*)');
    var imageID = pattern.exec(imageURL);
    
    var pxAPI = "https://500px.com/oembed?url=https://500px.com/photo/" + imageID[1] + "&format=json"

    var pxAPI2 = "https://api.500px.com/v1/photos?image_size%5B%5D=2048&expanded_user_info=true&ids=" + imageID[1];

    myHeaders = {
        "x-csrf-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MDIyMTI0IiwiaXNzIjoidSJ9.JHNc80mAHmAfRpZ9bgjoHKDVAdOgvoevBRwnV1lBSDo",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Origin": "https://500px.com",
        "Referer": "https://500px.com/popular",
        "Sec-Fetch-Mode": "no-cors"
    };

    $.getJSON(pxAPI, function( result ) {

        if ($('#smallerImg')) {
            $('#smallerImg').remove();
            $('#overlay').remove();
            $('#overlayInfo').remove();
        }

        $('#image').css("background-image", "url(" + result["url"] + ")");
        
        var img = document.createElement("IMG");
        img.src = result["url"];
        img.alt = result["author_name"];
        img.title = result["title"];
        img.width = "300";
        img.id = "smallerImg";

        var smallerImgDiv = document.getElementById("smallerImgDiv");
        var overlay = document.createElement("DIV");
        overlay.id = "overlay";
        var overlayInfo = document.createElement("DIV");
        overlayInfo.id ="overlayInfo";
        overlay.innerHTML = result["title"];

        overlay.class = "overlay";
        overlayInfo.class = "text";

        smallerImgDiv.append(img);
        smallerImgDiv.append(overlay);
        smallerImgDiv.append(overlayInfo);
    
    });

    
	
	

});