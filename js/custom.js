 jQuery(document).ready(function($) {

        $('#myCarousel').carousel({
                interval: 5000
        });

        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });

        $.getJSON( "fonts.json", function( data ) {
          var items = [];
          $.each( data, function( key, val ) {
            items.push( "<a href='#' class='list-group-item '><i class='material-icons md-48' style='margin-right:20%;'>" + val.dname +"</i>" + val.dname +"</a>" );
          });

          $( "<div/>", {
            "class": "list-group",
            html: items.join( "" )
          }).appendTo( ".thelist" );
        });
});
