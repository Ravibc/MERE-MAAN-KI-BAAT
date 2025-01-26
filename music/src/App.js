import {
  useState,
  useEffect
} from 'react';
import Player from './components/Player';

function App() {

  const [songs] = useState([{
    title: "Peace-1",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/1.mp3"
  }, {
    title: "Peace-2",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/2.mp3"
  }, {
    title: "Peace-3",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/3.mp3"
  }, {
    title: "Peace-4",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/4.mp3"
  }, {
    title: "Peace-5",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/5.mp3"
  }, {
    title: "Peace-6",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/6.mp3"
  }, {
    title: "Peace-7",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/7.mp3"
  }, {
    title: "Peace-8",
    artist: "Artist",
    img_src: "./image/de-stress.jpg",
    src: "./music/8.mp3"
  }, ])


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return ( < div className = "App" >
    <
    Player currentSongIndex = {
      currentSongIndex
    }
    setCurrentSongIndex = {
      setCurrentSongIndex
    }
    nextSongIndex = {
      nextSongIndex
    }
    songs = {
      songs
    }
    /> <
    /div>
  );
}

export default App;