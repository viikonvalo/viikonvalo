jQuery(function(){
    var currdate = new Date();
    var month = ('0' + (currdate.getMonth() + 1)).substr(-2);
    var day = ('0' + currdate.getDate()).substr(-2);
    jQuery('body').addClass('viewmonth-' + month + ' viewdate-' + month + '-' + day);
    var list;
    var place = jQuery('.psgallery');
    for (var i = 0; i < place.length; i++){
        var list = place.eq(i);
        if (list.prop('tagName') !== 'UL'){
            list = list.find('ul').eq(0);
            list.addClass('psgallery');
        }
    }
    jQuery('ul.psgallery').psgallery({
        notn: true,
        tnmaxsize: 150,
        filmstrip: true,
        effect: 'flip'
    });
});