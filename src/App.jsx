import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SongsList from './components/SongsList';
import axios from 'axios';
import throttle from 'lodash.throttle';

const extractData = arr => {
  const temp = [];
  for (const song of arr) {
    temp.push({
      artist: song.artistName,
      songName: song.trackName,
      songTrack: song.previewUrl,
      albumArtwork: song.artworkUrl100,
      album: song.collectionName,
      year: song.releaseDate.slice(0, 4),
    })
  }

  return temp;
}

const fetchSongs = async artistName => {
  return await axios.get(`https://itunes.apple.com/search?term=${artistName}&limit=20&entity=song`);
}

const pickRandomItems = (arr, count) => {
  const itemsCountToRemove = arr.length - count;
  if (itemsCountToRemove === 0 || itemsCountToRemove < 0) return arr;
  let temp = [...arr];
  for (let i = 0; i < itemsCountToRemove; i++) {
    const indexToRemove = Math.floor(Math.random() * temp.length);
    temp.splice(indexToRemove, 1);
  }

  return temp;
}

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    console.log(songs)
  }, [songs]);

  const onSubmit = throttle(async formData => {
    const response = await fetchSongs(formData);
    const arr = pickRandomItems(extractData(response.data.results), 5);
    setSongs([...arr].sort());
  }, 1000)

  return (
    <div className='wrapper'>
      <SearchBar
        header="iTunes Search API 🎵🎶"
        onSubmit={onSubmit}
        placeholder="Search for a artist"
      />
      <SongsList songs={songs} />
    </div>
  );
}

export default App;