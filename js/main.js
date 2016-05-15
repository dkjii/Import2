/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.
$(document).on('ready', function(){
	
	$.validator.addMethod("nonNumeric", function(value, element) {
    		return this.optional(element) || /^([^0-9]*)$/.test(value);
		},"Alphabatic characters are required.");
	
	$.validator.addMethod("exactlength", function(value, element, param) {
 			return this.optional(element) || value.length == param;
		}, $.validator.format("Please enter exactly {0} characters."));
	
	$("#order-form").validate({
		 submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128,
				nonNumeric:true
            },
			"your-address": {
                required: true
            },
			 "your-address2": {
                required: true
            },
			"your-city": {
                required: true,
                maxlength: 128
            },
            "your-state": {
                required: true,
				nonNumeric:true,
                exactlength:2
            },
            "your-zip": {
                required: true,
				digits: true,
				exactlength:5
            },
            "card-holder-name": {
                required: true,
                maxlength: 128,
				nonNumeric:true
            },
            "card-number": {
                required: true,
                creditcard: true
            },
			"expiry-month":{
				required:true
			},
			"expiry-year":{
				required:true
			},
            "cvv": {
                required: true,
                exactlength: 3,
                digits: true
            },
			"shipping-method":{
				required:true
			},
			"comments":{
				required:true,
				maxlength:500
			}
        }
	});
	
	//enhanced 
	$('label span.glyphicon').tooltip();

});
// Refer to the `index.html` file for the validation rules that must be enforced.
