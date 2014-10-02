

$('.verticalAccordion li').click(function() {
	$this = $(this);
	$('.verticalAccordion li').each(function(){
		$(this).removeClass('accordionActive');
	});
	$this.addClass('accordionActive');
});

$('#organizersButton').click(function() {
	$('#organizersTab,#organizersButton').addClass('active');
	$('#runnersTab,#runnersButton').removeClass('active');
});

$('#runnersButton').click(function() {
	$('#runnersTab,#runnersButton').addClass('active');
	$('#organizersTab,#organizersButton').removeClass('active');
});