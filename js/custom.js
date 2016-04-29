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
        var items= [{"dname":"3d_rotation","sheng":"","description":""},{"dname":"accessibility","sheng":"","description":""},{"dname":"accessible","sheng":"","description":""},{"dname":"account_balance","sheng":"","description":""},{"dname":"account_balance_wallet","sheng":"","description":""},{"dname":"account_box","sheng":"","description":""},{"dname":"account_circle","sheng":"","description":""},{"dname":"add_shopping_cart","sheng":"","description":""},{"dname":"alarm","sheng":"","description":""},{"dname":"alarm_add","sheng":"","description":""},{"dname":"alarm_off","sheng":"","description":""},{"dname":"alarm_on","sheng":"","description":""},{"dname":"all_out","sheng":"","description":""},{"dname":"android","sheng":"","description":""},{"dname":"announcement","sheng":"","description":""},{"dname":"aspect_ratio","sheng":"","description":""},{"dname":"assessment","sheng":"","description":""},{"dname":"assignment","sheng":"","description":""},{"dname":"assignment_ind","sheng":"","description":""},{"dname":"assignment_late","sheng":"","description":""},{"dname":"assignment_return","sheng":"","description":""},{"dname":"assignment_returned","sheng":"","description":""},{"dname":"assignment_turned_in","sheng":"","description":""},{"dname":"autorenew","sheng":"","description":""},{"dname":"backup","sheng":"","description":""},{"dname":"book","sheng":"Kitabu","description":""},{"dname":"bookmark","sheng":"","description":""},{"dname":"bookmark_border","sheng":"","description":""},{"dname":"bug_report","sheng":"","description":""},{"dname":"build","sheng":"Jenga","description":""},{"dname":"cached","sheng":"","description":""},{"dname":"camera_enhance","sheng":"","description":""},{"dname":"card_giftcard","sheng":"","description":""},{"dname":"card_membership","sheng":"","description":""},{"dname":"card_travel","sheng":"","description":""},{"dname":"change_history","sheng":"","description":""},{"dname":"check_circle","sheng":"","description":""},{"dname":"chrome_reader_mode","sheng":"","description":""},{"dname":"class","sheng":"","description":""},{"dname":"code","sheng":"","description":""},{"dname":"compare_arrows","sheng":"","description":""},{"dname":"copyright","sheng":"","description":""},{"dname":"credit_card","sheng":"","description":""},{"dname":"dashboard","sheng":"","description":""},{"dname":"date_range","sheng":"","description":""},{"dname":"delete","sheng":"","description":""},{"dname":"delete_forever","sheng":"","description":""},{"dname":"dns","sheng":"","description":""},{"dname":"done","sheng":"","description":""},{"dname":"done_all","sheng":"","description":""},{"dname":"donut_large","sheng":"","description":""},{"dname":"donut_small","sheng":"","description":""},{"dname":"eject","sheng":"","description":""},{"dname":"euro_symbol","sheng":"","description":""},{"dname":"event","sheng":"","description":""},{"dname":"event_seat","sheng":"","description":""},{"dname":"exit_to_app","sheng":"","description":""},{"dname":"explore","sheng":"","description":""},{"dname":"extension","sheng":"","description":""},{"dname":"face","sheng":"","description":""},{"dname":"favorite","sheng":"","description":""},{"dname":"favorite_border","sheng":"","description":""},{"dname":"feedback","sheng":"","description":""},{"dname":"find_in_page","sheng":"","description":""},{"dname":"find_replace","sheng":"","description":""},{"dname":"fingerprint","sheng":"","description":""},{"dname":"flight_land","sheng":"","description":""},{"dname":"flight_takeoff","sheng":"","description":""},{"dname":"flip_to_back","sheng":"","description":""},{"dname":"flip_to_front","sheng":"","description":""},{"dname":"g_translate","sheng":"","description":""},{"dname":"gavel","sheng":"","description":""},{"dname":"get_app","sheng":"","description":""},{"dname":"gif","sheng":"","description":""},{"dname":"grade","sheng":"","description":""},{"dname":"group_work","sheng":"","description":""},{"dname":"help","sheng":"","description":""},{"dname":"help_outline","sheng":"","description":""},{"dname":"highlight_off","sheng":"","description":""},{"dname":"history","sheng":"","description":""},{"dname":"home","sheng":"","description":""},{"dname":"hourglass_empty","sheng":"","description":""},{"dname":"hourglass_full","sheng":"","description":""},{"dname":"http","sheng":"","description":""},{"dname":"https","sheng":"","description":""},{"dname":"important_devices","sheng":"","description":""},{"dname":"info","sheng":"","description":""},{"dname":"info_outline","sheng":"","description":""},{"dname":"input","sheng":"","description":""},{"dname":"invert_colors","sheng":"","description":""},{"dname":"label","sheng":"","description":""},{"dname":"label_outline","sheng":"","description":""},{"dname":"language","sheng":"","description":""},{"dname":"launch","sheng":"","description":""},{"dname":"lightbulb_outline","sheng":"","description":""},{"dname":"line_style","sheng":"","description":""},{"dname":"line_weight","sheng":"","description":""},{"dname":"list","sheng":"","description":""},{"dname":"lock","sheng":"","description":""},{"dname":"lock_open","sheng":"","description":""},{"dname":"lock_outline","sheng":"","description":""},{"dname":"loyalty","sheng":"","description":""},{"dname":"markunread_mailbox","sheng":"","description":""},{"dname":"motorcycle","sheng":"","description":""},{"dname":"note_add","sheng":"","description":""},{"dname":"offline_pin","sheng":"","description":""},{"dname":"opacity","sheng":"","description":""},{"dname":"open_in_browser","sheng":"","description":""},{"dname":"open_in_new","sheng":"","description":""},{"dname":"open_with","sheng":"","description":""},{"dname":"pageview","sheng":"","description":""},{"dname":"pan_tool","sheng":"","description":""},{"dname":"payment","sheng":"","description":""},{"dname":"perm_camera_mic","sheng":"","description":""},{"dname":"perm_contact_calendar","sheng":"","description":""},{"dname":"perm_data_setting","sheng":"","description":""},{"dname":"perm_device_information","sheng":"","description":""},{"dname":"perm_identity","sheng":"","description":""},{"dname":"perm_media","sheng":"","description":""},{"dname":"perm_phone_msg","sheng":"","description":""},{"dname":"perm_scan_wifi","sheng":"","description":""},{"dname":"pets","sheng":"","description":""},{"dname":"picture_in_picture","sheng":"","description":""},{"dname":"","sheng":"","description":""},{"dname":"play_for_work","sheng":"","description":""},{"dname":"polymer","sheng":"","description":""},{"dname":"power_settings_new","sheng":"","description":""},{"dname":"pregnant_woman","sheng":"","description":""},{"dname":"print","sheng":"","description":""},{"dname":"query_builder","sheng":"","description":""},{"dname":"question_answer","sheng":"","description":""},{"dname":"receipt","sheng":"","description":""},{"dname":"record_voice_over","sheng":"","description":""},{"dname":"redeem","sheng":"","description":""},{"dname":"remove_shopping_cart","sheng":"","description":""},{"dname":"reorder","sheng":"","description":""},{"dname":"report_problem","sheng":"","description":""},{"dname":"restore","sheng":"","description":""},{"dname":"restore_page","sheng":"","description":""},{"dname":"room","sheng":"","description":""},{"dname":"rounded_corner","sheng":"","description":""},{"dname":"rowing","sheng":"","description":""},{"dname":"schedule","sheng":"","description":""},{"dname":"search","sheng":"","description":""},{"dname":"settings","sheng":"","description":""},{"dname":"settings_applications","sheng":"","description":""},{"dname":"settings_backup_restore","sheng":"","description":""},{"dname":"settings_bluetooth","sheng":"","description":""},{"dname":"settings_brightness","sheng":"","description":""},{"dname":"settings_cell","sheng":"","description":""},{"dname":"settings_ethernet","sheng":"","description":""},{"dname":"settings_input_antenna","sheng":"","description":""},{"dname":"settings_input_component","sheng":"","description":""},{"dname":"settings_input_composite","sheng":"","description":""},{"dname":"settings_input_hdmi","sheng":"","description":""},{"dname":"settings_input_svideo","sheng":"","description":""},{"dname":"settings_overscan","sheng":"","description":""},{"dname":"settings_phone","sheng":"","description":""},{"dname":"settings_power","sheng":"","description":""},{"dname":"settings_remote","sheng":"","description":""},{"dname":"settings_voice","sheng":"","description":""},{"dname":"shop","sheng":"","description":""},{"dname":"shop_two","sheng":"","description":""},{"dname":"shopping_basket","sheng":"","description":""},{"dname":"shopping_cart","sheng":"","description":""},{"dname":"speaker_notes","sheng":"","description":""},{"dname":"speaker_notes_off","sheng":"","description":""},{"dname":"spellcheck","sheng":"","description":""},{"dname":"star_rate","sheng":"","description":""},{"dname":"stars","sheng":"","description":""},{"dname":"store","sheng":"","description":""},{"dname":"subject","sheng":"","description":""},{"dname":"supervisor_account","sheng":"","description":""},{"dname":"swap_horiz","sheng":"","description":""},{"dname":"swap_vert","sheng":"","description":""},{"dname":"swap_vertical_circle","sheng":"","description":""},{"dname":"system_update_alt","sheng":"","description":""},{"dname":"tab","sheng":"","description":""},{"dname":"tab_unselected","sheng":"","description":""},{"dname":"theaters","sheng":"","description":""},{"dname":"thumb_down","sheng":"","description":""},{"dname":"thumb_up","sheng":"","description":""},{"dname":"thumbs_up_down","sheng":"","description":""},{"dname":"timeline","sheng":"","description":""},{"dname":"toc","sheng":"","description":""},{"dname":"today","sheng":"","description":""},{"dname":"toll","sheng":"","description":""},{"dname":"touch_app","sheng":"","description":""},{"dname":"track_changes","sheng":"","description":""},{"dname":"translate","sheng":"","description":""},{"dname":"trending_down","sheng":"","description":""},{"dname":"trending_flat","sheng":"","description":""},{"dname":"trending_up","sheng":"","description":""},{"dname":"turned_in","sheng":"","description":""},{"dname":"turned_in_not","sheng":"","description":""},{"dname":"update","sheng":"","description":""},{"dname":"verified_user","sheng":"","description":""},{"dname":"view_agenda","sheng":"","description":""},{"dname":"view_array","sheng":"","description":""},{"dname":"view_carousel","sheng":"","description":""},{"dname":"view_column","sheng":"","description":""},{"dname":"view_day","sheng":"","description":""},{"dname":"view_headline","sheng":"","description":""},{"dname":"view_list","sheng":"","description":""},{"dname":"view_module","sheng":"","description":""},{"dname":"view_quilt","sheng":"","description":""},{"dname":"view_stream","sheng":"","description":""},{"dname":"view_week","sheng":"","description":""},{"dname":"visibility","sheng":"","description":""},{"dname":"visibility_off","sheng":"","description":""},{"dname":"watch_later","sheng":"","description":""},{"dname":"work","sheng":"","description":""},{"dname":"youtube_searched_for","sheng":"","description":""},{"dname":"zoom_in","sheng":"","description":""},{"dname":"zoom_out","sheng":"","description":""}];
        var items_data = [];
        $.each( items, function( key, val ) {
          items_data.push( "<a href='#' class='list-group-item '><i class='material-icons md-48' style='margin-right:20%;'>" + val.dname +"</i>" + val.dname +"</a>" );
        });

        $( "<div/>", {
          "class": "list-group",
          html: items_data.join( "" )
        }).appendTo( ".thelist" );

        var iconStatus = 0;

        $( ".firstIcon" ).click(function() {
          iconGameCheck(1);
        });
        $( ".secondIcon" ).click(function() {
          iconGameCheck(2);
        });
        $( ".thirdIcon" ).click(function() {
          iconGameCheck(3);
        });
        $( ".fourthIcon" ).click(function() {
          iconGameCheck(4);
        });

        function iconGameCheck(iconNumber){
          console.log("icon number:" + iconNumber + " and " + "options array number:" + correctOption);
          if ((iconNumber - 1) === correctOption) {
            console.log("correct answer, this is the " + options[correctOption] + " icon");
          }else {
            console.log("sorry, that is the "+ options[(iconNumber-1)] +" icon, please try again");
          }
        }

        function iconGameNext(){

        }

        var option1 = items[Math.floor(Math.random()*items.length)].dname;
        var option2 = items[Math.floor(Math.random()*items.length)].dname;
        while (option2 === option1) {
          option2 = items[Math.floor(Math.random()*items.length)].dname;
        }

        var option3 = items[Math.floor(Math.random()*items.length)].dname;
        while (option3 === option2 || option3 === option1) {
          option3 = items[Math.floor(Math.random()*items.length)].dname;
        }

        var option4 = items[Math.floor(Math.random()*items.length)].dname;
        while (option4 === option3 || option4 === option2 || option4 === option1) {
          option4 = items[Math.floor(Math.random()*items.length)].dname;
        }

        console.log(option1 + ", " + option2 + ", " + option3 + ", " + option4);
        var options = [option1,option2,option3,option4];

        var correctOption = Math.floor(Math.random()*options.length);

        //var answer = [icon,correctOption];

        $( ".firstIcon" ).append( "<i class='material-icons md-48 ' style='font-size: 8em;'>" + option1 + "</i>" );
        $( ".secondIcon" ).append( "<i class='material-icons md-48 ' style='font-size: 8em;'>" + option2 + "</i>" );
        $( ".thirdIcon" ).append( "<i class='material-icons md-48 ' style='font-size: 8em;'>" + option3 + "</i>" );
        $( ".fourthIcon" ).append( "<i class='material-icons md-48 ' style='font-size: 8em;'>" + option4 + "</i>" );

        $( ".theQuestion" ).append( options[correctOption] );
        //$( "test" ).appendTo( ".theQuestion" );

        console.log(question);
});
