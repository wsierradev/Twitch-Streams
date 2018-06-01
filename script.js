let streams = ["ESL_SC2","OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'test_channel', 'maximilian_dood', 'pewdiepie']

$(document).ready(function(){
    $("#channel_msg").hide(); 
        $('.container').addClass('anim')
        $("#channel_msg").fadeIn(1550)
        $(".channels *").fadeOut(300, function() { $(this).remove(); });
        for (let i = 0; i < streams.length; i++) {    
            $.getJSON(`https://wind-bow.glitch.me/twitch-api/channels/${streams[i]}?callback=?`, function(json_info){
                let name  = json_info.display_name,
                    game  = `- ${json_info.game}`,
                    img   = json_info.logo,
                    title = `\u{1F534} ${json_info.status}`,
                    url   = json_info.url;
                $.getJSON(`https://wind-bow.glitch.me/twitch-api/streams/${streams[i]}?callback=?`, function(json_status){
                stream_status = json_status.stream;
                    if (stream_status == null) {
                        game  = "";
                        title = "Offline";
                    }
                channel = $(`<div class="channel"><a href="${url}"><img class="twitch_img" src="${img}"></img><h1>${name} ${game}</h1> <p>${title}</p></a></div>`).hide()
                $(".channels").append(channel); 
                channel.fadeIn(750);
                });  
            });
        }
    $('#all').click( function (x) {
        x.preventDefault();
        $('.channels *').slideDown();
    });
    $('#offline').click(function(x){
        x.preventDefault();
        $('.channel:not(:contains("Offline"))').slideUp()
        $('.channel:contains("Offline")').slideDown()

    })
    $('#live').click(function(x){
        x.preventDefault();
        $('.channel:contains("Offline")').slideUp()
        $('.channel:not(:contains("Offline"))').slideDown()

    })
});
