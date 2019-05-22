$(document).ready(function() {

var limitWidth;
var width = $(window).width();

if ( width <= 768) {
    limitWidth = 4;
} else {
    limitWidth = 12;
}
    var userFeed = new Instafeed({
        get: 'user',
        userId: '1991302157',
        limit: 5,
        resolution: 'standard_resolution',
        accessToken: '1991302157.1677ed0.e39696094fde4e14b7d18adcb11026dd',
        sortBy: 'most-recent',
        template: '<a href="{{link}}" title="{{none}}" target="_blank"><span class="icon-overlay"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
		
    });


    userFeed.run();


});



