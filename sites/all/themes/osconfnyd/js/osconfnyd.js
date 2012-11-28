console.log('js');

$ = jQuery;

$(document).ready(function(){
$('#edit-submitted-participate-3').attr('checked',false);
$('#edit-submitted-participate-3').bind('change',function(){
	$('#edit-submitted-talk-description').slideToggle();
}); 
$('#talkdetails').bind('click',function(e){
	$('#moreinfo').slideToggle();
	e.stopPropagation();
	return false;
}); 
$('#edit-submitted-talk-description').hide();
$('#moreinfo').hide();

$('#submit_button').bind('click',function(){
	$('#submit_button').text("Working...").removeClass('btn-danger').removeClass('btn-primary').removeClass('btn-success');
	$('#email_address').parent().parent().removeClass('error').removeClass('success');
	$.post("/",$('#signup_form').serialize(),function(data){
		console.log(data.response);
		if (data.response == 'OK') {
			$('#thanks').css('display','');
			$('#thanks').text("Thanks! We'll be in touch.");
			$('#submit_button').removeClass('btn-danger').removeClass('btn-primary').addClass('btn-success').text("Thanks!");
			$('#email_address').parent().parent().removeClass('error').addClass('success');
		}
		else {
			$('#thanks').text(data.response);
			$('#thanks').css('display','');
			$('#submit_button').removeClass('btn-primary').removeClass('btn-success').addClass('btn-danger').text("Submit");
			$('#email_address').parent().parent().removeClass('success').addClass('error');
		}
	});
});
});
