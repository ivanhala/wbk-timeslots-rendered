jQuery(document).on('wbk_timeslots_rendered', function() {
    jQuery('.wbk-slot-button').click( function(){
    	my_on_wbk_timeslots_rendered();
    }); 
});
function my_on_wbk_timeslots_rendered(){
    console.log( jQuery('.wbk-slot-active-button').length );
    if( jQuery('.wbk-slot-active-button').not('#wbk-to-checkout').length >= 10 ){    
      	jQuery('.wbk-slot-button').not('.wbk-slot-active-button').prop('disabled', true );
    } else {
        jQuery('.wbk-slot-button').not('.wbk-slot-active-button').prop('disabled', false );
    }
}    
