(function($)
{
  $(function()
  {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$(document).ready(function() 
	{
		$('select').material_select();
		$('.modal').modal();
		$('ul.tabs').tabs();
		$("#btnContinue").click(function() 
		{
			$('ul.tabs').tabs('select_tab', 'step2');
		});
		
		
		
		
		$('.items').hover(
       function()
	   { 
			$(this).addClass('z-depth-4');
	   }, function() 
	   {
		$( this ).removeClass('z-depth-4');
		});
		
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space