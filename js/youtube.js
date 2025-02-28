// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  //<div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //재생할 동영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8", //반복할 동영상 id
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
