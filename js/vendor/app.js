$(window).on('load', function() {
    $('#loader').fadeIn(500).hide(0);
    $('#landing_page').fadeIn(1000).show(0);
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z0-9_-]+$/i.test(value);
    }, "Please use only a-z0-9_-");
    $('#form-signin').submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            login: {
                minlength: 3,
                maxlength: 15,
                required: true,
                lettersonly: true
            },
            password: {
                minlength: 3,
                maxlength: 15,
                required: true,
                lettersonly: true
            }
        },
        highlight: function(element) {
            $(element).closest('.control-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.control-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            //submit via ajax
            $('html,body').animate({
                    scrollTop: $("#status_board").offset().top
                },
                'slow');

            $('#landing_left').fadeIn(1000).hide();
            $('#landing_right').fadeIn(1000).hide();
            $('#status_board1').slideDown("slow");
            $('#page1').fadeIn(1000).show();
            $('#footer').fadeIn(1000).show();

            return false; //This doesn't prevent the form from submitting.
        }
    });




    $('#addItem').click(function(e) {
        e.preventDefault();
    });



    $('#box').blur(function() {
        var number_of_box = $('#box').val();
        var perCost = $('#perCost').val();
        var total = number_of_box * perCost;
        $('#totalCost').val(total);
    });


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Incompatible");
        $('#landing_page').css('display','none');
        $('.mobile_device_error').removeClass('hide');
    }
    $("button").submit(function(e) {
        e.preventDefault();

        var target = e || window.event;
        var target = e.target || e.srcElement;
        var divNum = target.id;
        console.log(divNum);
        if (divNum == 'submit1' && $('input[type="text"]').hasClass('has-error')) {
            return;
        } else {
            $('html,body').animate({
                    scrollTop: $("#page1").offset().top
                },
                'slow');
        }
    });

	
});
