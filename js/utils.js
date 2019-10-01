$('a').click(function(e) {
    e.preventDefault();  //stop the browser from following


    var imageURL = $("#imageURL").val();
    var pattern= new RegExp('photo\/([0-9]*)');
    var imageID = pattern.exec(imageURL);
    var pxAPI = "https://500px.com/oembed?url=https://500px.com/photo/" + imageID[1] + "&format=json"

      $.getJSON(pxAPI, function( result ) {
        //download(result["url"],result["title"],"image/jpeg");

        var myHeaders = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9,fr;q=0.8",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Host": "drscdn.500px.org",
            "If-None-Match": "W\"ebb4d3dfd11bf456f82a0fd53772bd0f+20170823+e7360aabdd3e79cb6d153f4d0dc7bb72\"",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": 1,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        }

        $.ajax({
            url: result["url"],
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            //headers: myHeaders,
            success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = result["title"];
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        });


      });

    
	
	

});