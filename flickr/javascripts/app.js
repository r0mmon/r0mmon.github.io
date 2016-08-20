var main = function() {
    "use strict";
    // console.log("Hello");
    var tag = ""; //Запрос по тэгу
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + tag + "&format=json&jsoncallback=?";
    $.getJSON(url, function(flickrResponse) {
        // console.log(flickrResponse);
        flickrResponse.items.forEach(function(photo) {
            var $img = $("<img>");
            $img.attr("src", photo.media.m);
            $img.hide();
            $("main .photos").append($img);
            $img.fadeIn(3000);
        });
    });
};
$(document).ready(main);
