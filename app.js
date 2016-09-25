//Do Not Modify the getMusic f unction
function getMusic() {
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {

  let itemList = $('#song-list');
  let art = $('#album-art');
  let sample = $('#sample');

  // clears out previous search results
  itemList.empty();
  console.log(songList);

  songList.forEach(function (song) {
    let songPrev = song.preview;

    let card = '<img width="75px" src="' + song.albumArt + '"><ul><li id="songTitle">' + song.title
      + '</li><li id="priceText"><strong>' + "Price</strong> / $"
      + song.price + '</li><li><strong>' + "By</strong> / " + song.artist + '</li><li><strong>'
      + "Album </strong> / " + song.collection + '</li><li><audio controls class="audio"><source src="' + songPrev + '"></audio></li></ul>';


    // $('.audio').each(function (index, value) {
    //   if (!value.paused) {
    //     value.pause();
    //   }
    // });

    // var audio = songPrev[0];
    // if (audio.paused) {
    //   audio.play();
    // } else {
    //   audio.pause();
    // };



  // Attempt to add play preview function to each play icon but didn't work because all play classes played all at once because they're named the same
  // let sample = `
  //   <script>$(document).ready(function () {
  //   var audioElement = document.createElement('audio');

  //   audioElement.setAttribute('src', "` + songPrev + `");

  //   $.get();

  //   audioElement.addEventListener("load", function () {
  //     audioElement.play();
  //   }, true);

  //   $('.play').click(function () {
  //     audioElement.play();
  //   });

  //   $('.pause').click(function () {
  //     audioElement.stop();
  //   });
  // });
  // </script>
  // `
  // itemList.append(sample);
 
  itemList.append(card);


});



}