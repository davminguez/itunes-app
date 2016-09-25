//Do Not Modify the getMusic f unction
function getMusic() {
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {

  let itemList = $('#song-list');
  let art = $('#album-art');
  // clears out previous search results
  itemList.empty();
  console.log(songList);

  songList.forEach(function (song) {
    let songPrev = song.preview;

    let card = '<img width="75px" src="' + song.albumArt + '"><ul><li id="songTitle"><a href="' + songPrev +
      '"><i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i><audio controls><source src="' + songPrev + '"></audio></a> ' + song.title + '</li><li id="priceText"><strong>' + "Price</strong> / $"
      + song.price + '</li><li><strong>' + "By</strong> / " + song.artist + '</li><li><strong>' + "Album </strong> / " + song.collection + '</li></ul>';

    itemList.append(card);

  });


}