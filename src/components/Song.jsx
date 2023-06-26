import { useState } from "react";

function Song({ id, artist, songName, songTrack, album, albumArtwork, year }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const shortenStringLength = (str, maxLength) => {
    if (str.length > maxLength) {
      const newStr = str.slice(0, maxLength);
      return `${newStr}...`;
    }
    return str;
  }

  const handlePlay = e => {
    const currentlyPlayingId = e.target.id;
    const allAudioPlayers = document.querySelectorAll('[id^="audio-"]'); // selects all IDs, which starts with "audio-"
    for (const player of allAudioPlayers) {
      if (player.id === currentlyPlayingId) continue;
      player.pause(); // or play() for audio playing
    }
  }

  const displaySongContainer = () => {
    setIsImageLoaded(true);
  }

  return (
    <div className={`song ${isImageLoaded ? '' : 'hidden' }`}>
      <small>#{id}</small>
      <img src={albumArtwork} onLoad={displaySongContainer} alt='album-artwork' />
      <p>{artist} - {shortenStringLength(songName, 25)}</p>
      <h2>{shortenStringLength(album, 25)} [{year}]</h2>
      <audio controls src={songTrack} id={`audio-${id}`} onPlay={handlePlay}></audio>
    </div>
  )
}

export default Song;