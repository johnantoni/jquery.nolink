/*
 * jquery.nolink.js
 * Mat Ryer
 * 
 * nolink simply makes A tags not link anywhere -
 * instead the behaviour is managed by handling the click events
 * 
 */
(function($){
    
    $.fn.nolink = function() {
        return this.attr("href", "javascript:void(0);");
    }
    
})(jQuery);
