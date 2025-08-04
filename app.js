var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player("playlist", {
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("playpause");
    playButton.addEventListener("click", function () {
        player.playVideo();
        $('.buttonn').toggleClass('backward');
    }, false);
    var forwardButton = document.getElementById("FORWARD");
    forwardButton.addEventListener("click", function () {
        player.nextVideo();
    });
    var forwardButton = document.getElementById("BACKWARD");
    forwardButton.addEventListener("click", function () {
        player.previousVideo();
    });
    document.getElementById("myRange").addEventListener("change", function () {
        var volume = this.value;
        player.setVolume(volume);
    });
    document.getElementById("title").innerText = player.getVideoData().title;
}

function onPlayerStateChange(event) {
    var playButton = document.getElementById("playpause");
    playButton.addEventListener("click", function () {
        if (player.getPlayerState() == 1) {
            player.pauseVideo();
        }
    }, false);
    document.getElementById("title").innerText = player.getVideoData().title;
}