import Song from './Song';
import { motion } from "framer-motion";

function SongsList({ songs }) {
  const generateUniqueId = int => {
    return Math.random().toString().replace('0.', int);
  }

  let listContent = (
    <div className='empty'>
      <p>Found no songs yet</p>
      <small>＼（〇_ｏ）／</small>
    </div>
  );

  if (songs.length > 0) {
    listContent = (
      <ul className='list'>
        {songs.map((song, i) => (
          <motion.li
            key={generateUniqueId(i)}
            initial={{ opacity: 0.25, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Song
              id={i}
              artist={song.artist}
              songName={song.songName}
              songTrack={song.songTrack}
              album={song.album}
              albumArtwork={song.albumArtwork}
              year={song.year}
            />
          </motion.li>
        ))}
      </ul>
    )
  }

  return <div>{listContent}</div>;
}

export default SongsList;