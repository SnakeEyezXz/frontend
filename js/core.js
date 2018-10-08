$(document).ready(function(){    
           function displayGetSms (){
           	document.getElementById('getSms').style.display = 'block';
           	$('#getSms').addClass('animated zoomIn');
            document.getElementById('getCall').style.display = 'block';
            $('#getCall').addClass('animated zoomIn');
           };
           $('#autorizeMe').click(function(){ 
              	setTimeout(displayGetSms,950)
                $('#autorizeGroup').addClass('animated zoomOut');
                $('#autorizeMe').addClass('animated zoomOut');
            }); 
  			    $('#autorizeGroup').on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function () {
  			  		$(this).remove();
  			  	});
  			  	$('#autorizeMe').on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function () {
  			 		$(this).remove();
				    });

            function displayInput (){
              document.getElementById('InputCode').style.display = 'block';
              $('#InputCode').addClass('animated zoomIn');
              document.getElementById('SuccessCode').style.display = 'block';
              $('#SuccessCode').addClass('animated zoomIn');
            };
            $('#getSms').click(function(){ 
                setTimeout(displayInput,950)
                $('#getSms').addClass('animated zoomOut');
                $('#getCall').addClass('animated zoomOut');
                $('#getSms').on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function () {
                $(this).remove();
                });
                $('#getCall').on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function () {
                $(this).remove();
                });
            });        
});
