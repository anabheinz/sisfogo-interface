

$('.filter-btn').on('click', function() {
    let type = $(this).attr('id');
    let boxes = $('.project-box');
    let accordions = $('.accordion-item');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'rec-btn'){
        eachBoxes('rec', boxes, accordions);
    } else if (type =='uso-fogo-btn') {
        eachBoxes('uso-fogo', boxes, accordions);
    } else if (type == 'acoes-btn'){
        eachBoxes('acoes', boxes, accordions);
    } else {
        eachBoxes('all', boxes, accordions);
    }
});


function eachBoxes(type, boxes, accordions) {
    if(type == 'all'){
        $(boxes).fadeIn();
        $(accordions).fadeIn();
    } else {
        $(boxes).each(function(index, element){
            if(!$(element).hasClass(type)) {
                $(element).fadeOut('slow');
                $(accordions[index]).fadeOut('slow');
            } else {
                $(element).fadeIn();
                $(accordions[index]).fadeIn();
            }
        });
    }
}
