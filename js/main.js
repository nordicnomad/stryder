
// Content Roller
$(document).ready(function() {
    var $rollerHeight = $(window).innerHeight();
    $('.rollerSection').css('height', $rollerHeight);
    $('.contentRoller').css('height', $rollerHeight);
    
  $(window).resize(function() {
    var $rollerHeight = $(window).innerHeight();
    $('.rollerSection').css('height', $rollerHeight);
    $('.contentRoller').css('height', $rollerHeight);
  });
});


$('.rollerWrapper .container h2').on('click', function() {
  var $this;
  var $other;
  var $active;
  var $next;

  if($(this).parent().parent().hasClass('inactive-top')) {
    $this = $(this).parent().parent();
    $other = $('.inactive-bottom');
    $active = $('.active-middle');
    $next = $('.inactive-top-top').last();

    $this.addClass('active-middle');
    $this.removeClass('inactive-top');
    $active.addClass('inactive-bottom');
    $active.removeClass('active-middle');
    $other.addClass('inactive-bottom-bottom');
    $other.removeClass('inactive-bottom');
    $next.addClass('inactive-top');
    $next.removeClass('inactive-top-top');  
  }
  if ($(this).parent().parent().hasClass('inactive-bottom')) {
    $this = $(this).parent().parent();
    $other = $('.inactive-top');
    $active = $('.active-middle');
    $next = $('.inactive-bottom-bottom').first();

    $this.addClass('active-middle');
    $this.removeClass('inactive-bottom');
    $active.addClass('inactive-top');
    $active.removeClass('active-middle');
    $other.addClass('inactive-top-top');
    $other.removeClass('inactive-top');
    $next.addClass('inactive-bottom');
    $next.removeClass('inactive-bottom-bottom');
  }
  
});



// Vertical Accordion
$('#organizersTab .verticalAccordion li').click(function() {
	$this = $(this);
	$('#organizersTab .verticalAccordion li').each(function(){
		$(this).removeClass('accordionActive');
	});
	$this.addClass('accordionActive');
});

$('#runnersTab .verticalAccordion li').click(function() {
  $this = $(this);
  $('#runnersTab .verticalAccordion li').each(function(){
    $(this).removeClass('accordionActive');
  });
  $this.addClass('accordionActive');
});

//Vertical Accordion Switch
$('#organizersButton').click(function() {
	$('#organizersTab,#organizersButton').addClass('active');
	$('#runnersTab,#runnersButton').removeClass('active');
});

$('#runnersButton').click(function() {
	$('#runnersTab,#runnersButton').addClass('active');
	$('#organizersTab,#organizersButton').removeClass('active');
});

// Profile Page Owl Sliders
$(document).ready(function() {
 
  $("#favorites").owlCarousel({
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigation : true,
      navigationText : ['<i class="fa fa-2x fa-angle-left"></i>', '<i class="fa fa-2x fa-angle-right"></i>']
  });
  $("#upcoming").owlCarousel({
      items : 2,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigation : true,
      navigationText : ['<i class="fa fa-2x fa-angle-left"></i>', '<i class="fa fa-2x fa-angle-right"></i>']
  });
  $("#past").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigation : true,
      navigationText : ['<i class="fa fa-2x fa-angle-left"></i>', '<i class="fa fa-2x fa-angle-right"></i>']
  });


// Event Page Owl Slider 

	$("#gallery").owlCarousel({
      items : 2,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigation : true,
      navigationText : ['<i class="fa fa-2x fa-angle-left"></i>', '<i class="fa fa-2x fa-angle-right"></i>']
  });
});
