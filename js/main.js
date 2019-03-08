

 function getGallery() {
  
$("#gallery-click").hide();


 
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=71542c171848da257b3caa214f7ed00f&gallery_id=80002167-72157690212517893&format=json&nojsoncallback=1",
      "method": "GET",
      "headers": {}
    }
    
    $.ajax(settings).done(function (data) {
      console.log(data);
    
      
    
    $("#galleryTitle").append("Drinkspiration");
            $.each( data.photos.photo, function( i, gp ) {
    
    var farmId = gp.farm;
    var serverId = gp.server;
    var id = gp.id;
    var secret = gp.secret;
    
    console.log(farmId + ", " + serverId + ", " + id + ", " + secret);
    
    //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    
    $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
   
    
    });
   
    });

   
  }
      