
$(window).load(function(){
'use strict';
$('[class^="button"]').on('click', function(e){
	
    e.preventDefault();
    var numb = this.className.replace('button', '');
    $('[id^="content"]').hide();
    $('#content' + numb).show();
});

});




