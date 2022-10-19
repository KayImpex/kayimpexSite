// Navigation Bar Divs JS functions 
      $(document).ready(function () {
        $(".openbtn").click(function () {
            $(".banner").show();
        });
    });

    $(document).ready(function () {
        $("#hybrid a").mouseenter(function () {
            $(".hybrid").fadeIn(800);
            $(".hybrid").show();
            $(".about-us").hide();
            $(".portfolio").hide();
            $(".careerDiv").hide();
            $(".banner").remove();
        });
    });

    $(document).ready(function () {
        $("#about a").mouseenter(function () {
            $(".about-us").fadeIn(800);
            $(".about-us").show();
            $(".hybrid").hide();
            $(".portfolio").hide();
            $(".careerDiv").hide();
            $(".banner").hide();
        });
    });

    $(document).ready(function () {
        $("#service-portfolio a").mouseenter(function () {
            $(".portfolio").fadeIn(800);
            $(".portfolio").show();
            $(".hybrid").hide();
            $(".about-us").hide();
            $(".careerDiv").hide();
            $(".banner").hide();
        });
    });

    $(document).ready(function () {
        $("#career a").mouseenter(function () {
            $(".careerDiv").fadeIn(800);
            $(".careerDiv").show();
            $(".hybrid").hide();
            $(".about-us").hide();
            $(".portfolio").hide();
            $(".banner").hide();
        });
    });

    // Underlining dynamically
    $(document).ready(function () {
        $('.links').mouseenter(function () {
            $('.links').not(this).removeClass('underline');
            $(this).toggleClass('underline');
        });
    });

    // Toggle Colors of the Category
    $(document).ready(function () {
        $('#red').mouseenter(function () {
            $('#red').not(this).removeClass('black');
            $(this).toggleClass('black');
            $('#blue, #service, #career-about').mouseenter(function () {
                $('#red').not(this).removeClass('black');
                // $('#service').not(this).removeClass('black');
                // $('#career-about').not(this).removeClass('black');
            });
        });

        $('#blue').mouseenter(function () {
            $('#blue').not(this).removeClass('black');
            $(this).toggleClass('black');
            $('#red, #service, #career-about').mouseenter(function () {
                $('#blue').not(this).removeClass('black');
                // $('#service').not(this).removeClass('black');
            });
        });

        $('#service').mouseenter(function () {
                   $('#service').not(this).removeClass('black');
                  $('#service').not(this).removeClass('black');
            $(this).toggleClass('black');
            $('#red, #blue, #career-about').mouseenter(function () {
       // $('#service').not(this).removeClass('black');
            });
        });

        $('#career-about').mouseenter(function () {
            $('#career-about').not(this).removeClass('black');
            $(this).toggleClass('black');
            $('#red, #blue, #service').mouseenter(function () {
                $('#career-about').not(this).removeClass('black');
            });
        });

    });