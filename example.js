jQuery(document).on('wbk_timeslots_rendered', function() {
    jQuery('.wbk-slot-button').click( function(){
    	my_on_wbk_timeslots_rendered();
    }); 
});
function my_on_wbk_timeslots_rendered(){
    console.log( jQuery('.wbk-slot-active-button').length );
    if( jQuery('.wbk-slot-active-button').not('#wbk-to-checkout').length < 10 ){    
      	if( jQuery('.wbk_dynamic_style').length == 0 ){
	        jQuery("<style class='wbk_dynamic_style' type='text/css'>#wbk-to-checkout{ display:none !important; } </style>").appendTo('head');         
        }      
    } else {
        jQuery('.wbk_dynamic_style').remove();
    }
}   
