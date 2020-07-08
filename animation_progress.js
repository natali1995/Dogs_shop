$(document).ready(function() {
    $('.progressbar').each(function() {
        var progressbar = $(this),
            max = progressbar.attr('max'),
            time = (1000 / max) * 5,
            value = 0,
            end = progressbar.val();

        var loading = function () {
            value += 1;
            addValue = progressbar.val(value);

            $('.progress-value').html(value + '%');

            if (value === end) {
                clearInterval(animate);
            }
        };

        var animate = setInterval(function () {
            loading();
        }, time);
    });
});




