    $(function() {

        self=this;
        var width = 800;
        //var animationSpeed = 2000;
        var pause = 3000;
        var currentSlide = 1;

        var $slider = $('#slider');
        var $slideContainer = $slider.find('.slides');
        var $slides = $slideContainer.find('.slide');
        var prev = $('.prev');
        var next = $('.next');
        var interval;

        function startSlider() {
            interval = setInterval(function () {
                slideNext(2000);
            }, pause);
        }

        function stopSlider() {
            clearInterval(interval);
        }

            function slideNext(speed) {
                $slideContainer.animate({'margin-left': '-=' + width}, speed, function () {
                    currentSlide++;
                    if (currentSlide === $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', '25%');
                    }
                });
            }

            function slidePrev(speed) {
                $slideContainer.animate({'margin-left': '+=' + width}, speed, function () {
                    currentSlide--;
                    if (currentSlide === 1) {
                        currentSlide = $slides.length;
                        $slideContainer.css('margin-left', '25%');
                    }
                });
            }


        next.click(function(){
            slideNext(250);
        });
        prev.click(function(){
            slidePrev(250);
        });

        $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    });



